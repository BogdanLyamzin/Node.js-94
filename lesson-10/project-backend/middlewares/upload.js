import multer from "multer";
import path from "path";

import HttpError from "../helpers/HttpError.js";

const destination = path.resolve("temp");

const storage = multer.diskStorage({
    destination,
    filename: (req, file, callback) => {
        const uniquePrefix = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
        const filename = `${uniquePrefix}_${file.originalname}`;
        callback(null, filename);
    }
})

const limits = {
    fileSize: 1024 * 1024 * 5,
};

const fileFilter = (req, file, callback) => {
    const extention = file.originalname.split(".").pop();
    if (extention === "exe") {
        return callback(HttpError(400, ".exe extention not allow"));
    }

    callback(null, true);
}

const upload = multer({
    storage,
    limits,
    // fileFilter,
})

export default upload;