import { Router } from "express";
import { sendHelloWorld } from "../controllers/cryptoExchangeController.js";

const router = Router();

router.get("/", (req, res) => {
  res.send({ express: "Welcome to Backend" });
});

router.get("/hello", async (req, res) => {
  await sendHelloWorld(req, res);
});

export default router;
