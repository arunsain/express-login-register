const jwt = require('jsonwebtoken');
const db = require('../routes/db-config');
const bcrypt = require('bcryptjs');
// const cookie = require('cookie-parser')


const login = async (req,res)=>{
const  { email , password } =  req.body;

if(!email || !password){ return res.json({status:"error",error:"email and password is required"}); }
db.query("SELECT * FROM users WHERE email = ? ",[email],async (errr,result)=>{
  
if(errr) throw errr;
if(!result.length || ! await bcrypt.compare(password,result[0].password)){
     return res.json({status:"error",error:"credentials are wrong"});
    
   }
console.log(result[0].id );
  const token =  jwt.sign({id:result[0].id },process.env.JWT_SECRET,{expiresIn:process.env.COOKIE_EXPIRES});
  const cookieoption = { expiresIn: new Date(Date.now() +process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000) , httpOnly:true}

  res.cookie('userRegistered',token,cookieoption);
   return res.json({status:"success",success:"login success"});
})


}

module.exports =  login;