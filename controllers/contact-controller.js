import Contact from "../models/contact-models.js";



const contactForm=async(req,res)=>{
    try{
        const response=req.body;
        await Contact.create(response);
        return res.status(200).json({message:"message send successfully"});
    }
    catch(error){
        console.error("Error in contact form submission:", error);
    }
}

export default contactForm;