import mongoose from "mongoose";

const mongoClient = async () => {
  try {
    const mongoUrl = "mongodb://localhost:27017/search_fruit";
    const con = await mongoose.connect(mongoUrl);

    if (con) {
      console.log("Connected to database");
    }
  } catch (error) {
    console.log(error);
  }
};

export default mongoClient;
