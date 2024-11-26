import express from "express"
import { saveToS3Bucket } from "../controller/saveToS3Bucket.js";
import expressFormidable from "express-formidable";
import multer from 'multer';
const upload = multer();

const router = express.Router();

router.post("/",upload.single('file'),saveToS3Bucket)

export default router;