const User = require('../model/user')
const bcryptjs = require('bcryptjs');
const bcrypt = require('bcrypt')
const generateTokenAndSetCookie = require('../utils/generateToken');


// User registration method
const signup = async (req, res)=>{
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;
        
        if(password !== confirmPassword){
            return res.status(400).json({error : 'Password do not match'});
        }

        const user = await User.findOne({username});

        if(user){
            return res.send(400).json({error : 'username already exist'})
        }

        // Password Hashing
        const salt = await bcryptjs.genSalt(10)
        const hasedPassword = await bcryptjs.hash(password, salt)

        //Profile picture handling
        const maleProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const femaleProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password : hasedPassword,
            gender,
            profilePic : gender === 'male' ? maleProfile : femaleProfile,
        })
        if(newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()

        res.status(201).json({
            _id : newUser._id,
            fullName : newUser.fullname,
            username : newUser.username,
            profilePic : newUser.profilePic,
        })
    } else{
        res.status(400).json({error : "Invalid user data"})
    }

    } catch (error) {
        console.log('Error during signup', error.message);
        res.status(500).json({error : 'Internal server error'})
    }
}

// User login method
const login = async (req, res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error : 'Invalid username or password'});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id : user._id,
            fullName : user.fullname,
            username : user.username,
            profilePic : user.profilePic,
            token : token,
        });

    } catch (error) {
        console.log('Error during login :', error.message);
        res.status(500).json({error : 'Internal server error'});
    }
}

const logout = (req, res)=>{
    try {
        res.cookie("jwt", "",{maxAge : 0})
        res.status(200).json({message : "Logged out sucessfully"})
    } catch (error) {
        console.log('Error during logout :', error.message);
        res.status(500).json({error : 'Internal server error'});
    }
}

module.exports = {
    signup,
    login,
    logout,
}