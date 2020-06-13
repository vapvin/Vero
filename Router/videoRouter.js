import express from 'express';
import routes from '../routes';
import {videos, upload, videoDetail, editVideo, deleteVideo, postUpload} from '../controller/videoController';

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;