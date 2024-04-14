import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {                   
      type: String,
      required: true,
    },
    description: {        //floor dimension
      type: String,
      required: true,
    },
    price: {                //area range
      type: String,
      required: true,
    },
    category: {               //1 , 2 , 3  
      type: String,
      required: true,
    },
    quantity: {                 //this plan include
      type: String,
      required: true,
    },
    photo: {        
      data: Buffer,
      contentType: String,
    },
    shipping: {                 //
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);