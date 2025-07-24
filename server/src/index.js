import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
.then(()=>{
    app.on("error", (err) => {
      console.log("server error => ", err);
      throw err;
    })
   app.listen(process.env.PORT || 9000, () => {
      console.log(`Server is running on port : ${process.env.PORT}`);
   });
})
.catch((err) =>{
   console.log("mongodb connection error => ", err);
   
});