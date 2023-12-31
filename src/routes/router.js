import { Router } from "express";
import {
  sendHelloWorld,
  getCryptoCurrencies,
} from "../controllers/cryptoExchangeController.js";

const router = Router();

router.get("/", (req, res) => {
  res.send({ express: "Welcome to Backend" });
});

// router.get("/hello", async (req, res) => {
//   await sendHelloWorld(req, res);
// });

router.get("/getCryptoCurrencies", async (req, res) => {
  await getCryptoCurrencies(req, res);
});

export default router;
