//it contain logic for validation of signup and login take schema from auth-validator.js from calling the route of register and login before the controller

const validate=(schema)=>async(req,res,next)=>{
    try{
      const parseBody=await schema.parseAsync(req.body);
      req.body=parseBody;
        next();
    }catch(error){

        const status = 422;
        
        // Handle Zod validation errors
        if(error.issues && error.issues.length > 0){
            const message = error.issues[0].message;
            const errorObj = { status, message };
            next(errorObj);
        } else if(error.errors && error.errors.length > 0){
            const message = error.errors[0].message;
            const errorObj = { status, message };
            next(errorObj);
        } else {
            const errorObj = { status: 400, message: "Validation error" };
            next(errorObj);
        }
    }
};



export default validate;