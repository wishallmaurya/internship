const express = require('express');
const router = express.Router();


//....................Controllers
const collegeController= require("../controllers/collegeController")
const internController= require("../controllers/interncontroller")



//....................Create functionup/colleges
router.post("/functionup/colleges", collegeController.createCollege)

//....................Create  /functionup/interns
router.post("/functionup/interns", internController.createIntern)

//...................Get List Of functionup/colleges
 router.get("/functionup/collegeDetails", internController.getAllInterns)



module.exports = router;