import express, { Application, json, urlencoded } from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import routes from "./routes/index";
const port = process.env.PORT || 3005;

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const app: Application = express();

app.use(cors({
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use("/lendsqr/v2", routes);
app.use(json());
app.use(urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(colors.rainbow(`Server is running on http://localhost:${port}/lendsqr/v2/api/...`));
});