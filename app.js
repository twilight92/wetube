import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";
// default로 export하지 않았기 때문에 이렇게 import

const app = express();

const handleHome = (req, res) => res.send("Hello");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter)
//use의 의미: 누군가 /user 경로에 접속하면 이 router 전체를 사용하겠다.

export default app;
/*
ES6 javascript 모듈: app.js을 init.js에서 사용하기 위해 작성
누군가 내 파일을 불러올 때(import) app object를 주겠다는 의미
*/