const internModel = require("../model/internModel");
const mongoose = require("mongoose")
const collegeModel = require("../model/collegeModel");
const { isValidName, isValidEmail, isValidCollegeId, isValidMobile, isValid } = require("../validation/validator");

const createIntern = async function (req, res) {

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
        // if (!isValidCollegeId(data.collegeId))
        //     return res.status(400).send({ status: false, msg: "Pls Enter Valid collegeId" })



        if (!isValid(data.mobile))
            return res.status(400).send({ status: false, msg: "The mobile Attributes should not be empty" })
        if (!isValidMobile(data.mobile))
            return res.status(400).send({ status: false, msg: "Pls Enter Valid mobile" })


        let checkunique = await internModel.findOne({ email: req.body.email })
        if (checkunique) return res.status(400).send({ status: false, msg: "This email Already Exists Pls Use Another" })

        let checkunique2 = await collegeModel.findOne({ _id: req.body.collegeId })
        if (!checkunique2) return res.status(400).send({ status: false, msg: "This collegeId Does Not Exists Pls Use Another" })


        let savedData = await internModel.create(data);
        res.status(201).send({ status: true, data: savedData });
    }
    catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }

}
module.exports.createIntern = createIntern
