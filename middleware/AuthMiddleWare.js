const Auth = () => async (req, res, next) => {
  try {
    if (!req.headers.role) {
        console.log("....",req.headers.role);
      throw new Error("role is Missing");
    } else {
      // console.log(".",req.body);
      console.log(req.headers.role);
      const role = req.headers.role;

      if (role === "ADMIN" || role === "admin" || role === "user") {
        return next();
      } else {
        throw new Error("NO ACCESS");
      }
    }
  } catch (err) {
    return res.status(401).json({
      message: err.message,
    });
  }
};

module.exports = { Auth };
