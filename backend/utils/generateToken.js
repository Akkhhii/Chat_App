const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (userID, res)=>{
    // const token = jwt.sign({userID}, process.env.JWT_SECRET, {
    //     expiresIn : '15d', //token expire in days
    // });
    // res.cookie("jwt", token, {
    //     maxAge : 15 * 24 * 60 * 60 *1000, //Miliseconds format
    //     httpOnly : true,
    //     sameSite : "strict",
    //     secure : process.env.NODE_ENV !== "development",
    // });

    // return token
    try {
        if (!process.env.JWT_SECRET) {
          throw new Error("JWT_SECRET not found");
        }
    
        const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
          expiresIn: '15d',
        });
    
        res.cookie("jwt", token, {
          maxAge: 15 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          sameSite: "strict",
          secure: process.env.NODE_ENV !== "development",
        });
    
        return token;
      } catch (error) {
        console.log("❌ Error generating token:", error);
        throw error; // propagate to login controller
      }
};

module.exports = generateTokenAndSetCookie;