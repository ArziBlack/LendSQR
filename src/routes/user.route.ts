import { Router } from "express";
import { getAllUsers } from "../controllers/user.controller";
import { verify } from "../middleware/verify";

const router = Router();

// Get All Users
router.route("/all").get(verify, getAllUsers);

export default router;
