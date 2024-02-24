import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    roomId: {
      type: Number,
    },
  },
);

const Booking = mongoose.model("Book", roomSchema);

export default Booking;