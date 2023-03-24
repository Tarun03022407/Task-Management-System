const mongoose = require("mongoose")
const taskSchema=mongoose.Schema({
    title:String,
    type:{type:String, enum:["bug", "feature" , "story"],default:"bug"},
    description:String,
    assignedTo:String
})
const TaskModel=mongoose.model("task",taskSchema)
module.exports={TaskModel}