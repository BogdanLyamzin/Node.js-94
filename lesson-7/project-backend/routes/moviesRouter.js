import express from "express";

import moviesControllers from "../controllers/moviesControllers.js";

import { movieAddSchema, movieUpdateSchema } from "../schemas/moviesSchemas.js";

import validateBody from "../decorators/validateBody.js";

import isValidId from "../middlewares/isValidId.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesControllers.getAll);

moviesRouter.get("/:id", isValidId, moviesControllers.getById);

moviesRouter.post("/", validateBody(movieAddSchema), moviesControllers.add);

moviesRouter.put("/:id", isValidId, validateBody(movieUpdateSchema), moviesControllers.updateById);

moviesRouter.delete("/:id", isValidId, moviesControllers.deleteById);

export default moviesRouter;