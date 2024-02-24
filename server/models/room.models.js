import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String, 
    },
    numBed: {
      type: Number,
    }
  },
);

const Room = mongoose.model("Room", roomSchema);

export default Room;