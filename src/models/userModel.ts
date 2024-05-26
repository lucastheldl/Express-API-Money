import mongoose from "mongoose";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
type UserLogin = Omit<User, "firstName" | "lastName">;

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

export async function registerUser(user: User) {
  try {
    const userWithSameEmail = await UserModel.findOne({ email: user.email });
    if (userWithSameEmail) {
      throw new Error("Email already in use");
    }
    return await UserModel.create(user);
  } catch (error: any) {
    console.error(error.message);
    throw new Error("Error registering user");
  }
}
export async function loginUser(user: UserLogin) {
  try {
    const userWithEmail = await UserModel.findOne({ email: user.email });
    if (!userWithEmail) {
      throw new Error("User dont exists");
    }
    if (userWithEmail.password != user.password) {
      throw new Error("Invalid email or password");
    }
    return userWithEmail;
  } catch (error: any) {
    console.error(error.message);
    throw new Error("Error login user");
  }
}
