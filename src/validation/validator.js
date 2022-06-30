const isValid = (value) => {
    if (typeof value === "undefined" || value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    return true
}
const isValidName = (name) => {
    if (/[^a-z]/g.test(name))
        return true
}
const isValidFullName=(fname)=>{
    if(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i.test(fname))
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
const isValidlogoLink = (logoLink) => {
    if (/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/.test(logoLink))
        return true
}





module.exports={isValidEmail,isValidName,isValidFullName,isValid,isValidPassword,isValidCollegeId,isValidMobile,isValidlogoLink}


// Hello