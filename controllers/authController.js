import JWT from 'jsonwebtoken';
import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js'

const registerController = async(req, res)=>{
    try {
        const {name, email, password, address, phone} = req.body;
        if(!name){
            return res.send('name is required');
        };
        if(!email){
            return res.send('email is required');
        };
        if(!password){
            return res.send('password is required');
        };
        if(!address){
            return res.send('address is required');
        };
        if(!phone){
            return res.send('phone is required');
        };
    
        const existingUser = await userModel.findOne({email});
    
        if(existingUser){
            return res.status(200).send({
                success: false,
                message: "Already registered please login"
            })
        };

        const hashedPassword = await hashPassword(password)

        const user = await new userModel({name, email, password: hashedPassword, phone, address}).save();
        res.status(201).send({
            success: true,
            message: "User registered Successfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'Error in registrartion',
            error: error
        })
    }
}

const loginController= async (req, res)=>{
    try {
        const {email, password}= req.body;
        
        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: 'Invalid Email or Password'
            })
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'user not found'
            })
        }
        const match = await comparePassword(password, user.password);
        if(!match){
            return res.status(200).send({
                success: false,
                message: 'wrong password'
            })
        }

        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn:"7d"})

        res.status(200).send({
            success: true,
            message: 'Login Successful',
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: 'Error in Login',
            error: error
        })
    }
};

const testController=(req,res)=>{
    res.send("protected Route");
}

export {registerController, loginController, testController};