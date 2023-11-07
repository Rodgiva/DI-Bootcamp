import express from "express"
import { getRandomAndOptions, guess } from "../controllers/emojis.js"

const router = express.Router();

router.get('/play', getRandomAndOptions)
router.get('/guess', guess)

export default router;

