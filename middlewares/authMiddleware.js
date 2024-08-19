import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignin = async (req, res, next)=>{
    try {
        let decode =  JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user= decode;
        next();
    } catch (error) {
        console.log(error)
    }
};

export const isAdmin= async (req, res, next)=>{
    try {
        const user = await userModel.findById(req.user._id);

        if(user.role !== 1){
            return res.status(200).send({
                success: false,
                message: 'the user is not having admin role'
            })
        }else{
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'Error in isAdmin middleware',
            error: error
        })
    }
}