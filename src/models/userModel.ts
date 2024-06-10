import { compare, genSalt, hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
type UserLogin = Omit<User, "firstName" | "lastName">;

/* const userSchema = new mongoose.Schema({
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

export const UserModel = mongoose.model("User", userSchema); */

export async function registerUser(user: User) {
  try {
    const userWithSameEmail = await UserModel.findOne({ email: user.email });
    if (userWithSameEmail) {
      throw new Error("Email already in use");
    }

    const salt = await genSalt();
    const passwordHash = await hash(user.password, salt);

    user.password = passwordHash;
    const secret = process.env.JWT_SECRET as string;
    const token = jwt.sign(
      {
        sub: user.email,
      },
      secret,
      {
        expiresIn: "7 days",
      }
    );

    const createdUser = await UserModel.create(user);
    return { token, userId: createdUser._id };
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
    if (!(await compare(user.password, userWithEmail.password))) {
      throw new Error("Invalid email or password");
    }
    const secret = process.env.JWT_SECRET as string;
    const token = jwt.sign(
      {
        sub: user.email,
      },
      secret,
      {
        expiresIn: "7 days",
      }
    );

    return { token };
  } catch (error: any) {
    console.error(error.message);
    throw new Error("Error login user");
  }
}
