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
    },
    price: {                //area range
      type: String,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {                 //this plan include
      type: String,
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