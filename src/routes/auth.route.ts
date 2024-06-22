import { Router } from "express";
import { login } from "../controllers/auth.controller";

const router = Router();

//Login User or Admin
router.route("/signin").post(login);

export default router;