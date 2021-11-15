const mongoose = require("mongoose") 
const plantSchema = mongoose.Schema({ 
 plant_type: String, 
 size: String, 
 age: Number 
}) 
 
module.exports = mongoose.model("Plant", 
plantSchema) 