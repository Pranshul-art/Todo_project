const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Pranshul-art:pranshul%4012@cluster0.pwwjlxp.mongodb.net/todos")
const Schema= mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',Schema);
module.exports={
    todo
}
//mongodb+srv://Pranshul-art:pranshul%4012@cluster0.pwwjlxp.mongodb.net/