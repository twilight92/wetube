import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
// 알파벳 순으로 임포트 하는게 좋은 습관/ m은 r보다 먼저기 때문에 앞으로 이동
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

//use의 의미: 누군가 /user 경로에 접속하면 이 router 전체를 사용하겠다.

export default app;
/*
ES6 javascript 모듈: app.js을 init.js에서 사용하기 위해 작성
누군가 내 파일을 불러올 때(import) app object를 주겠다는 의미
*/