const express = require('express')

// var app = express(req, res){
//     res.send(' ')
// }
const app = express()

// const rootCall = (req , res) => res.send('Thank you very much');


app.get('/', (req , res) =>{
    res.send("thank you for calling me")
})


app.listen(3000, ()=>console.log('listing to port 3000'))