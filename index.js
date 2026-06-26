import express from "express"
const app = express()
app.use(express.json())
app.get("/",(req,res)=>{
     res.send("hi from ci cd")
})
app.listen(8080)