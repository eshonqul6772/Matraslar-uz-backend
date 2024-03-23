const { mongoose } = require("mongoose");

const connectDB = async () => {
    const connecting = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected database host in mongodb` .bold)
}


module.exports = connectDB;

