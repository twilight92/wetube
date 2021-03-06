import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
// 경로를 '/uploads/videos/' 이런식으로 쓰면 네 컴퓨터의 root에 upload를 만든다.

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: false,
        id: 1
    }
    next();
    // 이 경우 미들웨어가 커넥션과 라우트들 사이에 있기 때문에, next() 사용
};

export const uploadVideo = multerVideo.single("videoFile");
// 이 single은 오직 하나의 파일만 Upload할 수 있는 것을 의미한다.
// ('')는 여기 들어올 파일의 name