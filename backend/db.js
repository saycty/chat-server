import mongoose from "mongoose";
const DB=async(mongoURL)=>{
    if(!mongoURL){
        res.send("database is not matched please check database");
    }
    await mongoose.connect(mongoURL);
    console.log('connected to mongo')

}
export default DB;