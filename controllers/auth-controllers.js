 import User from "../models/user-models.js";


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



        const userCreated= await User.create({
            username,
            email,
            phone,
           
            password,
             // password:hash_password
        });
        
          
         res.status(200).json({ msg:userCreated });
          
    }
    catch (error) {
        res.status(500).json({message:"internal server error",error:error.message});
  }
 };
 export default {
     home,
     register   
 };