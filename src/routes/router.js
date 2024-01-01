import { Router } from "express";
import {
  getCryptoCurrencies,
  getNormalCurrencies,
  convertCurrencyAmount,
} from "../controllers/cryptoExchangeController.js";

const router = Router();

router.get("/", (req, res) => {
  res.send({ express: "Welcome to Backend" });
});

router.get("/getCryptoCurrencies", async (req, res) => {
  await getCryptoCurrencies(req, res);
});

router.get("/getNormalCurrencies", async (req, res) => {
  await getNormalCurrencies(req, res);
});

router.post("/convertCurrencyAmount", async (req, res) => {
  await convertCurrencyAmount(req, res);
});

export default router;
