
const mongoose = require("mongoose")

const collegeSchema = new mongoose.Schema({

<<<<<<< HEAD
    name:{type:String, required:true, unique:true},
    fullName:{ type:String, required:true },
    logoLink:{ type:String, required:true },
    isDeleted:{ type:Boolean, default:false }
=======
    name: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    logoLink: { type: String, required: true },
    isDeleted: { type: Boolean, default: false }
>>>>>>> 2c6b640e9443f4048f5eb8e4f7e63cf0d86b4d83

}, { timestamps: true })

module.exports = mongoose.model("College", collegeSchema);
