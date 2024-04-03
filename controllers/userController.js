const User = require('../Model/userModel');

// Fetch user details
const getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users);
};

//Create new user
const createUser = async (req,res) => {
    console.log('request body:', req.body)
    const { name, age } = req.body;
    const user = await User.create({
        name,
        age
    });
    res.json(user);
};

//Fetch user by specific id
const getUser = async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        // res.status(404);
        res.send('user not found');
    }
    res.json(user);
};

//Update specific user
const updateUser = async (req,res) => {
    // const user = await User.findById(req.params.id);
    // if(!user) {
    //     // res.status(404);
    //     res.send('user not found');
    // }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    console.log(req.body)
    res.json(updatedUser);
};

//Delete specific user
const deleteUser = async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        // res.status(404);
        res.send('user not found');
    }
    const removeUser = await User.remove();
    res.json(removeUser);
};

module.exports = {getUsers, createUser, getUser, updateUser,deleteUser};