import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to database'.bgMagenta.white);
    }catch(error){
        console.log(error);
        console.log('Eroor in mongoose'.bgRed.white);
    }
}


export default connectDB;