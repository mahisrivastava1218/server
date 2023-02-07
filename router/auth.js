const express= require('express')
//we need here router for backend
const router= express.Router(); //it have all the ability which is get by simple calling express
//get post everything can be done with the help of router
router.get('/',(req,res)=>{
    res.send('ok');
})

router.post('/register',(req,res)=>{
    console.log('k');
    res.send('llo');
    res.json({message: req.body})
})

module.exports =router;
