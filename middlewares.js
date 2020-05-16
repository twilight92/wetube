import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'WeTube'
    res.locals.routes = routes
    next();
    // 이 경우 미들웨어가 커넥션과 라우트들 사이에 있기 때문에, next() 사용
}