import express from "express";
import connectdb from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";

import 'dotenv/config'
import cors from 'cors'
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";


const app = express();
const PORT = 6500;

// Middleware
app.use(express.json());
app.use(cors())

// Connect to MongoDB
connectdb()
connectCloudinary()

//api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)


app.get('/about',(req,res)=>{
  res.send("Hello Alok Api working")
})

app.post('/',(req,res)=>{
  res.send("Hello Alok Api working")
})



app.listen(PORT, () => {
  console.log(`🚀 Server running at ${PORT}`);
});
