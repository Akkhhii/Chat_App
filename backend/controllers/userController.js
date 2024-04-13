const User = require('../model/user')

const getUsersForSideBar = async (req, res)=>{
    try {
        const loggedInUserId = req.user._id;

        const filteredUser = await User.find({_id: {$ne : loggedInUserId}}).select("-password")

        res.status(200).json(filteredUser)

    } catch (error) {
        console.log();
        res.status(500).json({error : "Internal server error"})
    }
}

module.exports = getUsersForSideBar