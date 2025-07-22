import { asyncHandler } from "../utils/AsyncHandeler.js";
import { User } from "../models/User.Model.js";
import { generateAccessAndRefreshToken } from "../utils/GenerateAccessAndRefreshToken.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResposne.js";

// register user api
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!(email && password && name && phone)) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
  });

  const registerUser = await User.findOne({ email }).select(
    "-password -refreshToken"
  );
  if(!registerUser) throw new ApiError(500,"Something went wrong while registering the user")

  return res
    .status(200)
    .json(new ApiResponse(200, "User registered successfully", registerUser));

});



// login user api
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password)
  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid credentials");
  }
  // Generate access and refresh tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
  // Save the refresh token in the user document
  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
  const options={
   httpOnly:true, //only server can modify them
   secure:true
  };
    return res
  .status(200)
  .cookie("accessToken",accessToken,options)
  .cookie("refreshToken",refreshToken,options)
  .json(
    new ApiResponse(
      200,{
        user:loggedInUser,accessToken,refreshToken
      },
      "User logged in successfully"
    )
  );
})


export const logoutUser=asyncHandler(async(req,res)=>{
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set:{
        refreshToken:undefined
      }
    },
      {
        new:true
      }
  )
  const options={
   httpOnly:true, //only server can modify them
   secure:true
  }
  return res
  .status(200)
  .clearCookie("accessToken",options)
  .clearCookie("refreshToken",options)
  .json(new ApiResponse(200,{}, "User logged out")
  );
});

