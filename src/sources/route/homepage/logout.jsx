


const Logout = () => {
     localStorage.removeItem("x-auth");
     return  window.location.replace("/")
}
 
export default Logout;