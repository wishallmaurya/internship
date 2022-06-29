
const mongoose = require("mongoose")

const collegeSchema = new mongoose.Schema({

<<<<<<< HEAD
=======

    
>>>>>>> d99f8d80e65cd07bab0e5b71cc73c6b5a7eb53c6
    name:{type:String, required:true, unique:true},
    fullName:{ type:String, required:true },
    logoLink:{ type:String, required:true },
    isDeleted:{ type:Boolean, default:false }
<<<<<<< HEAD

=======
  
>>>>>>> d99f8d80e65cd07bab0e5b71cc73c6b5a7eb53c6
}, { timestamps: true })

module.exports = mongoose.model("College", collegeSchema);
