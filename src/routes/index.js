import { Router } from "express";
import { authRouter } from "./auth.js";
import { Routes } from "./lib/routes.js";
import { postRouter } from "./post.js";
import { testMiddleWare } from "../middlewares/test.middle.js";

const router = Router();

router.use(Routes.AUTH, authRouter);
router.use(Routes.POST, postRouter);

export { router };
