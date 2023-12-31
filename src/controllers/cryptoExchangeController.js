import * as https from "https";

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
