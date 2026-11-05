import  {User} from '../models/user.model.js';
export  const signup = async(req,res)=>{   
    const {email,password,name} = req.body;

    try{
        if(!email || !password || !name){
            throw new Error("All fields are required");
        }
        const userAlreadyExits =  await User.findOne({email});
        if(userAlreadyExits){
           return res.status(400).json({success:false,message:"User already exists"});
        }
    }catch(error){
                    return res.status(400).json({success:false, message:error.message});

    }
    const hashedPassword = await bcrypt
}

export const login = async (req,res)=>{
    res.send("Login Routes")
}

export const logout = async (req,res)=>{
    res.send("logout Routes")
}