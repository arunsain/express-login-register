const db =  require('../routes/db-config');
const jwt = require('jsonwebtoken');

const loggedin =  (req,res,next)=>{

    if(!req.cookies.userRegistered)return next();
    
   
        console.log("hello");
      
      jwt.verify(req.cookies.userRegistered,process.env.JWT_SECRET, function(errrr, decoded) {
  if (errrr) throw next();
  
       db.query('SELECT * FROM users WHERE id = ?',[decoded.id],(errr,result)=>{
          if(errr)return  next() ;
        
          req.user = result[0];
          return next();
      })
  
       
        
});
    
 
    
}
module.exports = loggedin;