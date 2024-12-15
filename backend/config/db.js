import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDBURI);
    console.log("DB Connected");
  } catch (error) {
    console.log("Error in connecting DB");
  }
};
