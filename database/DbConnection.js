const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        // console.log(result);
    } catch(err) {
        throw err;
    }
}

module.exports = connectToDatabase;