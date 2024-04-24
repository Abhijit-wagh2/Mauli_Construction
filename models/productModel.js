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
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
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