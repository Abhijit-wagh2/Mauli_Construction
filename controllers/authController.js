import { log } from "console";
import { hashPassword ,comparePassword} from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
// import orderModel from "../models/orderModel.js";



export const registerController = async (req, res) => {
    try {
      const { name, email, password} = req.body;
      //validations
      if (!name) {
        return res.send({ error: "Name is Required" });
      }
      if (!email) {
        return res.send({ error: "Email is Required" });
      }
      if (!password) {
        return res.send({ message: "Password is Required" });
      }
      

     

      //check user
      const exisitingUser = await userModel.findOne({ email });

      //exisiting user
      if (exisitingUser) {
        return res.status(200).send({
          success: false,
          message: "Already Register please login",
        });
      }
      //register user
      const hashedPassword = await hashPassword(password);
      //save
      const user = await new userModel({
        name,
        email,
        password: hashedPassword,
      }).save();
  
      res.status(201).send({
        success: true,
        message: "User Register Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Registeration",
        error,
      });
    }
  };

  export const loginController = async(req,res) => {
      try{
        const{email,password} = req.body;

        //validation
        if(!email || !password){
          return res.status(404).send({
            success : false,
            message : 'Invalid Usernamr or password'
          })
        }
        
        //check user 
        const user = await userModel.findOne({email});
        if(!user){
          return res.status(404).send({
            success : false,
            message : 'Email is not registred'
          })
        } 
        const match = await comparePassword(password,user.password)
        if(!match){
          return res.status(200).send({
            success : false,
            message : 'Invalid password'
          })
        }

        //token creation
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn : "7d",});

        res.status(200).send({
          success : true,
          message : 'login succesfully',
          user,
          token,
        })
      }catch(error){
        console.log(error);
        res.status(500).send({
          success:false,
          message:'Error in login',
          error
        })
      }
  }