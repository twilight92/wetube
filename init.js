import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 8080;
// process.env로 부터 PORT를 불러와서 만일 대상을 못 찾으면 8080번으로
// 키 숨기기

const handleListening = () =>
    console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
/*
첫번째 줄에 application을 app파일에서 가져왔기 때문에
app.listen을 사용할 수 있다.
*/