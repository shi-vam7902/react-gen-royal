const RoleSchema = require("../model/RoleSchema");
const Auth = () => async (req, res, next) => {
  try {

    if (!req.headers.role) {
      console.log("....", req.headers.role);
      throw new Error("role is Missing");
    }//end of if1
     else {

      console.log(".",req.body);
      console.log(req.headers.role);
      const role = req.headers.role;

      RoleSchema.findById(role, (err, data) => {
        if (err) {
          return res.status(401).json({
            message: "You are not authorized",
          });
          
        }//innerif
         else {
          if (data.name == "Admin") {
            console.log("FOund",data);
            return next();
          }//inininner 
          else {
            console.log("indside else");
            return res.status(200).json({
              message: "You are not authorized",
            });
          }//ininelse
        }//else
      });//fun
      // if (role === "ADMIN" || role === "admin" ) {
      //   return next();
      // } else {
      //   throw new Error("NO ACCESS");
      // }
    }// end of else
  } catch (err) {

    return res.status(401).json({
      message: err.message,
    });
  }//end of catch
};

module.exports = { Auth };
