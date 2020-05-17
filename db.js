import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
/*
dotenv.config라는 함수로 .env 파일 안에 있는 정보를 불러올 수 있고
찾은 모든 variable들을 process.env.key에 저장
.env 파일은 .gitignore에 이미 추가되어 있기 때문에 깃에 무시
gitignore에 추가되있지 않으면 이 작업은 헛수고
*/


mongoose.connect(
    process.env.MONGO_URL,
    // 누구나 볼 수 있는 URL 대신에 .env로 부터 그 정보를 가져오기
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = () => console.log(`Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);