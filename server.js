import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import router from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

//database config
connectDB();

const app = express();

//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',router);
app.use('/api/v1/category',categoryRoute);
app.use('/api/v1/product',productRoutes);

app.get('/' , (req,res) =>{
    res.send('Welcome to app')
})

//port
const PORT = process.env.PORT || 8080 ;


//run listen
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`.bgCyan.white);
})