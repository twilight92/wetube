// Video들의 형태 정의
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "Title URL is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        Default: Date.now
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            // 모든 Comment의 정보를 넣는게 아닌 Comment의 ID만 넣음 [1, 2, 4, 7] 이런 식으로 Video와 연결 된 Comment들의 ID가 저장됨
            ref: "Comment"
        }
    ]
});

const model = mongoose.model("Video", VideoSchema);
export default model;