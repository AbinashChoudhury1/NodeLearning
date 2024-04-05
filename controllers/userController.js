const User = require('../Model/userModel');

// Fetch all users details GET
const getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users);
};

//Create new user POST
const createUser = async (req,res) => {
    const { name, age } = req.body;
    const user = await User.create({
        name,
        age
    });
    res.json(user);
};

//Fetch user by specific id GET
const getUser = async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        res.status(404);
        res.send("User not found");
    }
    res.json(user);
};

//Update specific user PUT
const updateUser = async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        res.status(404);
        res.send('user not found');
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    console.log(req.body)
    res.json(updatedUser);
};

//Delete specific user DELETE
const deleteUser = async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        res.status(404);
        res.send('user not found');
    }
    await User.findByIdAndDelete(user);
    res.json(user);
};

module.exports = {getUsers, createUser, getUser, updateUser,deleteUser};