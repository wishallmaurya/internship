const InternModel = require("../model/internModel");

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
module.exports.createIntern = createIntern
