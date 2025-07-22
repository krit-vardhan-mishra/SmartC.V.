import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }));

const allowedOrigins = process.env.CORS_ORIGIN?.split(",").map((origin) =>
  origin.trim()
);

const corsOptions = {
  origin: function (origin, callback) {
    console.log("Allowed origins:", allowedOrigins);
    if (
      !origin ||
      allowedOrigins.some((allowed) => allowed.toLowerCase() === origin.toLowerCase())
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser()); // serve se user ke brower ki cookies access aur set krne ke liye

app.use(
  express.json({
    limit: "20kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "20kb",
  })
);

app.use(express.static("public"));



import userRouter from "./routes/User.Routes.js";
app.use("/api/v1/user", userRouter);

export default app;