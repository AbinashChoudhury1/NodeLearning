const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectToDatabase = require('./database/DbConnection');

connectToDatabase();
const port=process.env.PORT || 3000;

app.use(express.json());

const userRoute = require("./routes/userRoutes")
app.use("/api/users", userRoute);  

// const user = require('./Model/userModel');
// async function insert () {
//     await user.create({
//         name:'Abinash',
//         age: 29
//     })
// }
// insert();

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})