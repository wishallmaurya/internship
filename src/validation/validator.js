const isValidEmail=(mail)=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    return true
}
const isValidName=(name)=>{
    if(/^[a-z ,.'-]+$/i.test(name))
    return true
}
const isValidFullName=(fname)=>{
    if(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i.test(fname))
    return true
}
const isValid=(value)=>{
    if(typeof value==="undefined" || value=== null ) return false
    if(typeof value==="string" && value.trim().length===0) return false
    return true
}
const isValidPassword=(pw)=>{
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/.test(pw))
    return true
}
const isValidTitle=(title)=>{
    if(/^[a-zA-Z]+(([',. -][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/.test(title))
    return true
}
const isValidBody=(body)=>{
    if(/^[a-zA-Z]+(([',. -][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/.test(body))
    return true
}





module.exports={isValidEmail,isValidName,isValidFullName,isValid,isValidPassword,isValidTitle,isValidBody}

// Hello