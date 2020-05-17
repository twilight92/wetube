import "./db";
import app from "./app";

const PORT = 8080;

const handleListening = () =>
    console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
/*
첫번째 줄에 application을 app파일에서 가져왔기 때문에
app.listen을 사용할 수 있다.
*/