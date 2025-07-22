import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandeler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/User.Model.js";

export const verifyJWT=asyncHandler(async(req, _ ,next)=>
  {
    try {
      const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
      
      if(!token)
        {
          throw new ApiError(401,"Unauthorized request")
        }
        //decodedToken contains the info about the user
      const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET) 
      
      const user=await User.findById(decodedToken?._id).select("-password -refreshToken")
      if(!user){
        throw new ApiError(401,"Invalid Access Token")
      }
      req.user=user;
      next()
    } catch (error) {
      throw new ApiError(401,error?.message||"Invalid Token")
      
    }
  }
  
)