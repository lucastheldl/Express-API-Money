import mongoose from "mongoose";
import "dotenv/config";

export async function connectToDb() {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.lkhmtzp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
  } catch (error) {
    if (error) {
      return console.log(error);
    }
    return console.log("conectado ao banco");
  }
}
