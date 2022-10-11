import axios from 'axios';
axios.defaults.headers.common['x-auth'] = localStorage.getItem("x-auth")
// axios.interceptors.response.use(null,(error)=>{
//     const expectedError = error.response && error.status>=400 && error.response.status < 500

//     if(!expectedError){
//       console.log(error)
//     }
//    return Promise.reject(error)
// })




export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}