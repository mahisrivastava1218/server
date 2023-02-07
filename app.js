const express=require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
const app=express();
dotenv.config({path: './config.env'})
require('./review')
// link router files to make root easy
app.use(require('./router/auth'))
const User=require('./model/userSchema')
const PORT= process.env.PORT

mongoose.set('strictQuery', true);
const middleware=(req,res,next)=>{
    console.log('middleware')
    next();
}

app.get('/',(req,res)=>{
    res.send('jppp')
})
app.get('/about',(req,res)=>{
    res.send('jppp')
})

app.get('/contact',middleware,(req,res)=>{
    console.log('contact')
    res.send('jppp')
})
app.get('/signin',(req,res)=>{
    res.send('jppp')
})
app.get('/signup',(req,res)=>{
    res.send('jppp')
})

app.listen(PORT,()=>{
    console.log(`hello ${PORT}`)
})