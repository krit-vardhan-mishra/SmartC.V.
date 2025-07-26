import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import skillRouter from "./routes/Skill.Routes.js";
import userRouter from "./routes/User.Routes.js";
import resumeRouter from "./routes/Resume.Routes.js";

const app = express();  // <-- MUST be first before using app

app.use("/api/v1/skills", skillRouter);

// CORS Setup
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

app.use(cookieParser());

app.use(
  express.json({
    limit: "20kb",
  })
);
app.get("/", (req, res) => {
  res.send("SmartCV Backend is running!");
});

app.use(
  express.urlencoded({
    extended: true,
    limit: "20kb",
  })
);

app.use(express.static("public"));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/resumes", resumeRouter);

export default app;
