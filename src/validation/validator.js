const isValidEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        return true
}
const isValidName = (name) => {
    if (/^[a-z ,.'-]+$/i.test(name))
        return true
}
const isValid = (value) => {
    if (typeof value === "undefined" || value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    return true
}
const isValidMobile = (mobile) => {
    if (/^([+]\d{2})?\d{10}$/.test(mobile))
        return true
}

const isValidCollegeId = (collegeId) => {
    if (/^[a-zA-Z]+(([',. -][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/.test(collegeId))
        return true
}





module.exports = { isValidEmail, isValidName, isValid, isValidMobile, isValidCollegeId }

// Hello