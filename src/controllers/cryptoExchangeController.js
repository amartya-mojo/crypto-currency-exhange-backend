import * as https from "https";
import axios from "axios";
const isLocal = true;
// const BASE_API_URL = isLocal
//   ? process.env.BASE_SANDBOX_API_URL
//   : process.env.BASE_PROD_API_URL;

const BASE_API_URL =
  process.env.BASE_SANDBOX_API_URL || "https://pro-api.coinmarketcap.com";
console.log(process.env.BASE_SANDBOX_API_URL);

console.log(BASE_API_URL);

export const sendHelloWorld = (req, res) => {
  try {
    console.log("Hello world in controller");
    setTimeout(() => {
      res.send("Hello world");
    }, 1000);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const getCryptoCurrencies = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/v1/cryptocurrency/map`, {
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

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
