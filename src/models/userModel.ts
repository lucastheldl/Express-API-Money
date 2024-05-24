import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
  },
});

export const UserModel = mongoose.model("User", userSchema);

export async function registerUser(user) {
  try {
    return await UserModel.create(user);
  } catch (error: any) {
    console.error(error.message);
  }
}
