const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { email, password: Npassword } = req.body;

  if (!email || !Npassword){
    return res.json({ status: "error", error: "both fields are required" });
  }else{
  db.query('SELECT email FROM users WHERE email = ?',[email], async (err,result)=>{
    if(err) throw err;
  
    if(result[0]) return res.json({ status: "error", error: "email already exists" })
    else{
      const password = await bcrypt.hash(Npassword,8);
      db.query('INSERT INTO users SET ?',{email:email,password:password},async (er,results)=>{
        if(er) throw er
        return res.json({ status: "success", success: "user register successfully" });
      })
      
    
    }

  })
}
};

module.exports = register;
