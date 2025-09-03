import {z} from "zod";
//it contain logic for validation of signup and login


//Creating schema for register
const signupSchema=z.object({
    username:z.string({required_error:"Username is required"})
    .trim()
    .min(3,{message:"Username must be at least 3 characters long"})
    .max(30,{message:"Username must be at most 30 characters long"}),

    email: z
     .string({ required_error: "Email is required" })
     .trim()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),


    phone:z.string({required_error:"Phone number is required"})
    .trim()
    .min(10,{message:"Phone number must be at least 10 digits long"})
    .max(10,{message:"Phone number must be at most 10 digits long"}),

    password:z.string({required_error:"Password is required"})
    .trim()
    .min(8,{message:"Password must be at least 8 characters long"})
    .max(30,{message:"Password must be at most 30 characters long"}),
    
    
});
//Creating schema for login
const loginSchema=z.object({
    email:z.string({required_error:"Email is required"})
    .trim()
    .min(1,{message:"Email is required"})
    .email("Invalid email address"),

    password:z.string({required_error:"Password is required"})
    .trim()
    .min(8,{message:"Password must be at least 8 characters long"})
    .max(30,{message:"Password must be at most 30 characters long"}),
    
    
});

export default {signupSchema,loginSchema};