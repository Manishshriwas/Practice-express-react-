 import User from "../models/user-models.js";
 import bcrypt from "bcryptjs";


 const home=async(req,res)=>{
     try{
          res
          .status(200)
          .send('auth router is working');

     }
     catch (error) {
        console.error('Error in home controller:', error);
     }
 };

 const register=async(req,res)=> {
    try{
        //  console.log(req.body);
         const {username,email,phone ,password}=req.body; 
          
         const userExist= await User.findOne({email});

         if(userExist){
            return res.status(400).json({msg:"email alredy exits"})
         }

        //  bcrypt password method 1 and second method is use pre function inseide model save hone se phle prev function run hoga
        //  const saltRound=10;
        //  const hash_password=await bcrypt.hash(password,saltRound);


       //save in db
        const userCreated= await User.create({
            username,
            email,
            phone,
           
            password,
             // password:hash_password
        });
        
          
         res.status(201).json({
             msg:"registration successful" ,
             token:await userCreated.generateToken(),
             userId:userCreated._id.toString(),
            });
          
    }
    catch (error) { 
        res.status(500).json({message:"internal server error",error:error.message});
  }
 };

const login=async(req,res)=>{
    
    try {
        // console.log("incoming body", req.body)
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "User with this email does not exist." });
        }
        const isMatch = await bcrypt.compare(password, userExist.password);
        if (isMatch) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({
                msg: "Invalid email or password."
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}



 export default {
     home,
     register ,
     login  
 };