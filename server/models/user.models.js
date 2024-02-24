import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;