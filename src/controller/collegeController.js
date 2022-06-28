const collegeModel = require("../model/collegeModel");

const createCollege = async function (req,res){

try {
    let data= req.body
    let savedData = await collegeModel.create(data);
        res.status(201).send({ status: true,msg:"College Created Successfully", data: savedData });



}

catch (error) {
    return res.status(500).send({ status: false, msg: error.message })
}

}
module.exports.createCollege = createCollege
