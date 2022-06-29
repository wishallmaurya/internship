const collegeModel = require("../model/collegeModel");
const {isValidName,isValid } = require("../validation/validator");

const createCollege = async function (req,res){

try {
    let data= req.body

    if (Object.keys(data).length == 0) {
        return res.status(400).send({status: false, msg: "Body should not be empty" })
    }
    if (!("name" in data) || !("fullName" in data) || !("logoLink" in data)) 
    return res.status(400).send({status:false, msg: "name, fullname,logoLink are required" })
    
    if (!isValid(data.name))
    return res.status(400).send({ status: false, msg: "The name Attributes should not be empty" })
    if (!isValidName(data.name))
    return res.status(400).send({ status: false, msg: "Pls Enter Valid Name" })

    if (!isValid(data.name))
    return res.status(400).send({ status: false, msg: "The name Attributes should not be empty" })
    if (!isValidName(data.name))
    return res.status(400).send({ status: false, msg: "Pls Enter Valid Name" })

    let checkunique= await authorModel.findOne({name:req.body.name}) 
    if (checkunique) return res.status(400).send({status:false,msg:"This name Already Exists Pls Use Another"})


    let savedData = await collegeModel.create(data);
        res.status(201).send({ status: true,msg:"College Created Successfully", data: savedData });



}

catch (error) {
    return res.status(500).send({ status: false, msg: error.message })
}

}
module.exports.createCollege = createCollege
