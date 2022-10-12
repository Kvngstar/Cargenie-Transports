 import jwt_decode from 'jwt-decode'
 
const savejwt = (jwt)=>{
return localStorage.setItem("x-auth",jwt)
}
const getjwt = ()=>{
 const jwt = localStorage.getItem("x-auth")
 return jwt
}

const getDetails =()=>{
    if(getjwt()){

        const user =   jwt_decode(getjwt())
        return (user) ? user: ""
    }
    return ""
}

export default { savejwt : savejwt, getjwt,getDetails}