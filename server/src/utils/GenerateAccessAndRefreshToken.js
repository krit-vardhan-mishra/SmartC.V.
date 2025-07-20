import User from "../models/User.Model.js";


export const generateAccessAndRefrshToken = async (userid) => {
    try {
      const user = await User.findById(userid);
      const accessToken = user.generateAccessToken();
      const refreshToken = user.generateRefreshToken();
  
      user.refreshToken = refreshToken;
      await user.save({ validateBeforeSave: false });
  
      return { accessToken, refreshToken };
    } catch (error) {
      throw new ApiError(
        500,
        "SOMETHING went wrong while generating refresh and access token"
      );
    }
  };