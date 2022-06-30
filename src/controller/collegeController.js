const collegeModel = require("../model/collegeModel"); //Importing internmodel
const { isValidName, isValidFullName, isValid, isValidlogoLink } = require("../validation/validator");//Importing Validations

// Creation of College via POST /functionup/colleges

const createCollege = async function (req, res) {

    try {
        let data = req.body

        //Checking Validation of empty Body

        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, msg: "Body should not be empty" })
        }
        //Checking stauts of required fields-- (name,fullName and logoLink) if all will present then code will proceed

        if (!("name" in data) || !("fullName" in data) || !("logoLink" in data))
            return res.status(400).send({ status: false, msg: "name, fullname,logoLink all three are required" })

        //Checking presence, format and uniqueness of name
        data.name = data.name.split(" ").join("") // Removing space between the name
        if (!isValid(data.name))
            return res.status(400).send({ status: false, msg: "The name Attributes should not be empty" })
        if (!isValidName(data.name))
            return res.status(400).send({ status: false, msg: "Pls Enter Valid Name of College" })

        let checkunique = await collegeModel.findOne({ name: req.body.name })
        if (checkunique) return res.status(400).send({ status: false, msg: "This name Already Exists Pls Use Another" })

        //Checking presence and  format of fullName
        if (!isValid(data.fullName))
            return res.status(400).send({ status: false, msg: "The name Attributes should not be empty" })
        if (!isValidFullName(data.fullName))
            return res.status(400).send({ status: false, msg: "Pls Enter Valid Full Name of College" })

        //Checking presence and format of link
        if (!isValid(data.logoLink))
            return res.status(400).send({ status: false, msg: "The name Attributes should not be empty" })
        if (!isValidlogoLink(data.logoLink))
            return res.status(400).send({ status: false, msg: "Pls Enter Valid Link for Logo of College" })


        // Creating database of CollegeModel    
        let savedData = await collegeModel.create(data);
        res.status(201).send({ status: true, msg: "College Created Successfully", data: savedData });


    }

    catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }

}
module.exports.createCollege = createCollege
//Done