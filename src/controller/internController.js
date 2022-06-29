
const InternModel = require("../model/internModel");
const collegeModel = require("../model/collegeModel");
const createIntern = async function (req,res){


    try {
        let data = req.body

        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, msg: "Body should not be empty" })
        }
        if (!("name" in data) || !("email" in data) || !("mobile" in data) || !("collegeId" in data))
            return res.status(400).send({ status: false, msg: "name, email,mobile, collegeId must be required" })


        if (!isValid(data.name))
            return res.status(400).send({ status: false, msg: "The name Attributes should not be empty" })
        if (!isValidName(data.name))
            return res.status(400).send({ status: false, msg: "Pls Enter Valid Name" })


        if (!isValid(data.email))
            return res.status(400).send({ status: false, msg: "The email Attributes should not be empty" })
        if (!isValidEmail(data.email))
            return res.status(400).send({ status: false, msg: "Pls Enter Valid email" })


        if (!isValid(data.collegeId))
            return res.status(400).send({ status: false, msg: "The collegeId Attributes should not be empty" })
        if (!isValidCollegeId(data.collegeId))
            return res.status(400).send({ status: false, msg: "Pls Enter Valid collegeId" })



        if (!isValid(data.mobile))
            return res.status(400).send({ status: false, msg: "The mobile Attributes should not be empty" })
        if (!isValidMobile(data.mobile))
            return res.status(400).send({ status: false, msg: "Pls Enter Valid mobile" })


        let checkunique = await InternModel.findOne({ email: req.body.email })
        if (checkunique) return res.status(400).send({ status: false, msg: "This email Already Exists Pls Use Another" })

        let checkunique2 = await collegeModel.findOne({ _id: req.body.collegeId })
        if (!checkunique2) return res.status(400).send({ status: false, msg: "This collegeId Does Not Exists Pls Use Another" })


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
