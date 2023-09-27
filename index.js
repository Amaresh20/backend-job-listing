const express=require('express')
const bodyParser=require('body-parser')
const ejs=require('ejs')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('./public'))

app.set('view engine','ejs')
const User=mongoose.model('User',{
   name:String,
   email:String,
   mobile:String,
   password:String
})
app.get('/',(req,res)=>{
   res.json({
    status:'All good!!'
   })
})
app.get('/health',(req,res)=>{
     res.json({
      service:'job-listing-server',
      status:'active',
      time:new Date()
     })
})
app.listen(process.env.PORT,()=>{
     mongoose.connect(process.env.MONGODB_URL)
     .then(()=>console.log(`Server running at http://localhost:${process.env.PORT}`))
})