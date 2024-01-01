import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_API_URL =
  process.env.BASE_PROD_API_URL || "https://pro-api.coinmarketcap.com";

export const convertCurrencyAmount = async (req, res) => {
  const { convertFrom, convertTo, amount } = req.body;
  try {
    const response = await axios.get(
      `${BASE_API_URL}/v2/tools/price-conversion`,
      {
        params: {
          amount: amount,
          convert_id: convertTo,
          id: convertFrom,
        },
        headers: {
          "Content-type": "application/json",
          "X-CMC_PRO_API_KEY": process.env.X_CMC_PRO_API_KEY,
          Accept: "*/*",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getCryptoCurrencies = async (req, res) => {
  try {
    const currencyData = await getCurrencyData("/v1/cryptocurrency/map"); // for crypto currency
    res.json(currencyData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error", error);
  }
};

export const getNormalCurrencies = async (req, res) => {
  try {
    const currencyData = await getCurrencyData("/v1/fiat/map"); // for normal currency
    res.json(currencyData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error", error);
  }
};

const getCurrencyData = async (reqUrl) => {
  try {
    console.log(`${BASE_API_URL}${reqUrl}`);
    const response = await axios.get(`${BASE_API_URL}${reqUrl}`, {
      params: {
        start: 1,
        limit: 100,
        sort: "id",
      },
      headers: {
        "Content-type": "application/json",
        "X-CMC_PRO_API_KEY": process.env.X_CMC_PRO_API_KEY,
        Accept: "*/*",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
