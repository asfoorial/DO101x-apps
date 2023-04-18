var express = require("express")
app = express()

app.get('/', (req,res)=>res.send("Hello World4!"))

app.get('/mars', (req,res)=>res.send("Hello Mars!"))

app.listen(8080, ()=>console.log("App is listening on 8080"))