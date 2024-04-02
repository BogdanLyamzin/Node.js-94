import express from "express";

import authControllers from "../controllers/authControllers.js";

import { userSignupSchema, userSigninSchema } from "../schemas/usersSchemas.js";

import validateBody from "../decorators/validateBody.js";

import authenticate from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(userSignupSchema), authControllers.signup);

authRouter.post("/signin", validateBody(userSigninSchema), authControllers.signin);

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.post("/signout", authenticate, authControllers.signout);

export default authRouter;