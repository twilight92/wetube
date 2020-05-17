import express from "express";
import routes from "../routes";
import {
    postUpload,
    postEditVideo,
    deleteVideo,
    getUpload,
    getEditVideo,
    videoDetail
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

export const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;