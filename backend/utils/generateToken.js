const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (userID, res)=>{
    const token = jwt.sign({userID}, process.env.JWT_SECRET, {
        expiresIn : '15d', //token expire in days
    });
    res.cookie("jwt", token, {
        maxAge : 15 * 24 * 60 * 60 *1000, //Miliseconds format
        httpOnly : true,
        sameSite : "strict",
        secure : process.env.NODE_ENV !== "development",
    });

    return token
};

module.exports = generateTokenAndSetCookie;