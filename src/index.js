import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import router from "./routes/router.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const corsOptions = {
  origin: "*",
  methods: ["POST", "GET", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(morgan("combined"));
app.use(helmet());
app.use(cors(corsOptions));

app.options("*", cors());
app.use("/api/", router);

const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
