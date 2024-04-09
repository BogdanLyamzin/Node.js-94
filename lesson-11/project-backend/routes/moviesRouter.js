import express from "express";

import moviesControllers from "../controllers/moviesControllers.js";

import { movieAddSchema, movieUpdateSchema } from "../schemas/moviesSchemas.js";

import validateBody from "../decorators/validateBody.js";

import isValidId from "../middlewares/isValidId.js";
import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const moviesRouter = express.Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", moviesControllers.getAll);

moviesRouter.get("/:id", isValidId, moviesControllers.getById);

// upload.fields([{name: "poster", maxCount: 1}])
// upload.array("poster", 8);
moviesRouter.post("/", upload.single("poster"), validateBody(movieAddSchema), moviesControllers.add);

moviesRouter.put("/:id", isValidId, validateBody(movieUpdateSchema), moviesControllers.updateById);

moviesRouter.delete("/:id", isValidId, moviesControllers.deleteById);

export default moviesRouter;