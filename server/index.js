import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import taskRouter from "./routes/room.routes.js"
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());

app.listen(5000, () => {
    console.log('Sever run on port 5000')
})

const corsOptions = {
    origin: "http://localhost:5173",
  };
  
  app.use(cors(corsOptions));

app.get("/", (req,res) => {
    res.send('hello world')
})

app.use("/rooms", taskRouter)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

