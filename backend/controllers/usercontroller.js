import userModel from "../Models/schema.js";
import bcrypt from "bcrypt";
import { use } from "bcrypt/promises.js";
import jwt from "jsonwebtoken";
import Validator from "validator";

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;

    return jwt.sign({ _id }, jwtkey);
};

//registration


const registeruser = async (req, res) => {


    try {
        const { name, email, password } = req.body;

        let user = await userModel.findOne({ email });

        if (user) return res.status(400).json("user already exists!...");
        if (!name || !email || !password)
            return res.status(400).json("please fill all the details");
        if (!Validator.isEmail(email))
            return res.status(400).json("enter a valid email...");
        if (!Validator.isStrongPassword(password))
            return res.status(400).json("enter a strong password...");

        user = new userModel({ name, email, password });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        const token = createToken(user._id);
        res.status(200).json({ _id: user._id, name, email, token })
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

//login

const loginuser = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await userModel.findOne({ email });

        if (!user)
            return res.status(400).json("invalid email or password");

        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword)
            return res.status(400).json("invalid password");

        const token = createToken(user._id);
        res.status(200).json({ _id: user._id, name: user.name, email, token })
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};



const finduser = async (req, res) => {
    const userid = req.params.userid;
    try {
        const user = await userModel.findById(userid);

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
const getuser = async (req, res) => {
    try {
        const users = await userModel.find();

        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}




export { registeruser, loginuser, finduser, getuser };
