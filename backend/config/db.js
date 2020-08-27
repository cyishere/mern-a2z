/*
 * @Author: chen yang
 * @Date: 2020-08-27 09:28:24
 * @Last Modified by: chen yang
 * @Last Modified time: 2020-08-27 09:38:40
 */
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB is connected.");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
