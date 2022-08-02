/**
 * Define all your API web-routes
 */

import StatusServiceController from "../controllers/services/Status.controller";
import { Router } from "express";
const router = Router();

router.get("/status", StatusServiceController.run);

export default router;
