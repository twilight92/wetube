export const home = (req, res) => res.render("home", { pageTitle: "Home" });
// render 함수의 첫번째 인자는 템플릿, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체

export const search = (req, res) => {
    //const searchingBy = req.query.term;
    const {
        query: { term: searchingBy }
    } = req;

    res.render("search", {
        pageTitle: "Search",
        // searchingBy: searchingBy
        searchingBy
    });
}

export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });

export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });