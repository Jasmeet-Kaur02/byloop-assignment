const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connected to DB.");
  } catch (error) {
    console.log("Error while connecting to the database", error);
  }
};

module.exports = connectDB;
