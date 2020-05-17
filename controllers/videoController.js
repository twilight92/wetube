import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => {
/*
async: JavaScript야 이 function의 어떤 부분은 꼭 기다려야 해
JavaScript는 한 번에 많은 일을 할 수 있고 기다리지 않기 때문
예)
일단 Video를 살펴보고 있으니까 다음 render 작업도 같이할게
*/  try {
        const videos = await Video.find({});
        /*
        await 다음 과정이 끝날 때까지 잠시 기다려 달라
        Database에 있는 모든 Video 가져오기
        await은 async안에서만 사용 가능

        await부분이 끝나기 전까지는 render 부분을 실행하지 않을 것
        */
        res.render("home", { pageTitle: "Home", videos });
    } catch(error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
    /*
    try catch: error가 생기면 default로 잡아내지 못한다.
    엄청 중요한 error가 있고 우리가 잡아내지 못한다면
    NodeJS는 불평할거고 모든게 망가짐
    */
};
// render 함수의 첫번째 인자는 템플릿, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체

export const search = (req, res) => {
    //const searchingBy = req.query.term;
    const {
        query: { term: searchingBy }
    } = req;

    res.render("search", {
        pageTitle: "Search",
        // searchingBy: searchingBy
        searchingBy,
        videos
    });
}

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const postUpload = async(req, res) => {
    const {
        // body: { file, title, description }
        // 존재하는 건 file, title, description/ body는 우리가 마지막으로 정의한 variable이 아니어서 존재 X
        body: { title, description },
        file: { path }
    } = req;

    const newVideo = await Video.create({
      fileUrl: path,
      title: title,
      description: description
    });

    // To Do: Upload and save video
    res.redirect(routes.videoDetail(newVideo.id));
}

export const videoDetail = async(req, res) => {
    // console.log(req.params.id);
    const {
        params: {id}
    } = req;
    const video = await Video.findById(id);
    console.log(video);
    res.render("videoDetail", { pageTitle: "Video Detail" });
}

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });