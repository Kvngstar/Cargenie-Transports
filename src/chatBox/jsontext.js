module.exports = [ {status:"customer",message: "Hello boy", Time: getDate()},
{status:"admin",message:"who are you",Time:getDate() },
{status:"customer",message:"I am kingsley",Time: getDate()},
 {status:"customer",message:"don`t you know me",Time: getDate()},
{status:"customer",message: "emma"},
{status:"customer",message:"surname is egbe",Time: getDate()},
{status:"admin",message: "Okay"},
{status:"admin",message: "How may i help you",Time: getDate()},
{status:"customer",message: "I am having issue with registration for several months now, i have been trying to create an account with you company but to no avail and i have ",Time: getDate()}


]
function getDate(){
    let todays_date = new Date().toLocaleString()
    return todays_date
}