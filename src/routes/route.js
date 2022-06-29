const express = require('express');
const router = express.Router();


//....................Controllers
const collegeController = require("../controller/collegeController")
const internController = require("../controller/interncontroller")



//....................Create functionup/colleges
// router.post("/functionup/colleges", collegeController.createCollege)

//....................Create  /functionup/interns
<<<<<<< HEAD
 router.post("/functionup/interns", internController.createIntern)
=======
router.post("/functionup/interns", internController.createIntern)
>>>>>>> 2c6b640e9443f4048f5eb8e4f7e63cf0d86b4d83

//...................Get List Of functionup/colleges
  router.get("/functionup/collegeDetails", internController.getCollegeInternDetails)

// 

module.exports = router;


