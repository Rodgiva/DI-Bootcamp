import express from "express";
import { getHello, world } from "../controllers/hello.controller.js";
const router = express.Router();

router.get("/hello", getHello);
router.post("/world", world);

export default router;
