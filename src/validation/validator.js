const isValid = (value) => {
    if (typeof value === "undefined" || value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    return true
}
const isValidName=(name)=>{
    if(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i.test(name))
    return true
}



const isValidFullName=(fname)=>{
    if(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i.test(fname))
    return true
}
const isValidlogoLink = (logoLink) => {

    if (/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(logoLink))
        return true
}
const isValidEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
return true

}


const isValidMobile = (mobile) => {
    if (/^([+]\d{2})?\d{10}$/.test(mobile))
        return true
}

const isValidPassword=(pw)=>{
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/.test(pw))
    return true
}
const isValidCollegeId = (collegeId) => {
    if (/^[a-zA-Z]+(([',. -][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/.test(collegeId))
        return true
}


module.exports={isValidEmail,isValidName,isValidFullName,isValidlogoLink,isValid,isValidPassword,isValidCollegeId,isValidMobile}




