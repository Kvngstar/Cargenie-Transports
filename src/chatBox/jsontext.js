module.exports = [ {status:"customer",message: "Good morning Cargenie", Time: getDate()}, 
 {status:"admin",message: "How can i help you?", Time: getDate()},
 {status:"customer",message: "Adipisci tempore, unde illum quo dolores veniam id voluptatem ipsam fugit enim? Asperiores, accusantium quia? Labore, quo. Facere expedita quos iste ratione.?", Time: getDate()},
 {status:"admin",message: "Ipsam fugit enim? Asperiores, accusantium quia? Labore, quo. Facere expedita quos iste ratione.?", Time: getDate()},
]
function getDate(){
    let todays_date = new Date().toLocaleString()
    return todays_date
}  