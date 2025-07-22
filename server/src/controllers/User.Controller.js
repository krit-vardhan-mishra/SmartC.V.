import { asyncHandler } from "../utils/AsyncHandeler.js";
import { User } from "../models/User.Model.js";
import { generateAccessAndRefrshToken } from "../utils/GenerateAccessAndRefreshToken.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResposne.js";

// register user api
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!(email && password && name && phone)) {
    throw new ApiError(400, "All fields are required");
  }

  const existinguser = User.findOne({ email });
  if (existinguser) {
    throw new ApiError(400, "User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
  });

  const registerUser = await User.findOne({ email }).select(
    "-password , -refreshToken"
  );

  return res
    .status(200)
    .json(new ApiResponse(200, "User registered successfully", registerUser));

});



// login user api
export const LoginUser = asyncHandler(async (req, res) => {
  
})

