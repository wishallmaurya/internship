const InternModel = require("../model/internModel");
const collegeModel = require("../model/collegeModel");
const createIntern = async function (req,res){

try {
    let data= req.body
    let savedData = await InternModel.create(data);
        res.status(201).send({ status: true, data: savedData });

}




catch (error) {
    return res.status(500).send({ status: false, msg: error.message })
}

}

const getCollegeInternDetails=async function(req,res){
    try {
        let data=req.query.name
       
     if(!data) return res.status(400).send({status: false , message: "data must be provided"})
       
     const college = await collegeModel.findOne({name:data})
    
        
        if(!college) {
            return res.status(404).send({status: false , message: "college not found"})
        }
        const  interns = await InternModel.find({collegeId:college._id}).select({name: 1, email: 1, mobile :1 })
        if(!interns) {
            return res.status(404).send({status: false , message: "no interns found in given college"})
        }
        res.status(200).send({ status : false , "data": { "name": college.name, "fullName": college.fullName, "logoLink":college.logoLink, "interns": interns}})

    } catch (err) {
        
}
}



module.exports.createIntern = createIntern
module.exports.getCollegeInternDetails = getCollegeInternDetails
