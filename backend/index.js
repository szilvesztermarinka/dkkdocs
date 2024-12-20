import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import appRoutes from "./routes/app.route.js"

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse cookies

app.use("/api/auth", authRoutes);
app.use("/api/app", appRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
