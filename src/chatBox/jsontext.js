module.exports = [ {status:"admin",message: "How can i help you?", Time: getDate()},
]
function getDate(){
    let todays_date = new Date().toLocaleString()
    return todays_date
} 