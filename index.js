const express=require("express")
const router=require("./router/router")
const bodyparse = require("body-parser")

const port=8000
const app=express()
app.use(express.json())
app.use('/',router)


app.listen(port,()=>{
console.log(`server starts at port no ${port}`)
})