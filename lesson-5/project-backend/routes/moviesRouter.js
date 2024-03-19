import express from "express";

import moviesControllers from "../controllers/moviesControllers.js";

import { movieAddSchema, movieUpdateSchema } from "../schemas/moviesSchemas.js";

import validateBody from "../decorators/validateBody.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesControllers.getAll);

// moviesRouter.get("/:id", moviesControllers.getById);

// moviesRouter.post("/", validateBody(movieAddSchema), moviesControllers.add);

// moviesRouter.put("/:id", validateBody(movieUpdateSchema), moviesControllers.updateById);

// moviesRouter.delete("/:id", moviesControllers.deleteById);

export default moviesRouter;