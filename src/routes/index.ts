import { Request, Response, Router } from "express";
import authRoute from "../routes/auth.route";
import dataRoute from "../routes/user.route";

const router = Router();

/** GET /health-check - Check service health */
router.get("/health-check", (_req: Request, res: Response) =>
  res.send({ check: "Lendsqr server startred and successful" })
);

// mount auth route
router.use("/api/auth", authRoute);

// mount users route
router.use("/api/users", dataRoute);

export default router;
