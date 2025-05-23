import { Router } from "express";
import { signupController, verifyUserController, signIn, refreshUserController } from "../controllers";
import { authenticateUser } from "../middlewares";

export const authRouter = Router();

authRouter.post("/sign-in", signIn);
authRouter.post("/sign-up", signupController);
authRouter.get("/verify-user", verifyUserController);
authRouter.get("/refresh-user", authenticateUser, refreshUserController);
