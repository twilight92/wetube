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
    }
});

const model = mongoose.model("Video", VideoSchema);
export default model;