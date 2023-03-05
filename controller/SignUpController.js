const SignupSchema = require('../model/SignupSchema')
const bcrypt = require('bcrypt')
const saltRound = 10;
function hashPassword(password)
{
    // bcrypt.genSalt(saltRound).then(salt=>{
    //     return bcrypt.hash(password,salt)
    // }).then(hash=>{
    //     // console.log(err);
    //     // return hash;
    //     console.log(hash);
    // }).catch(err=>{
    //     console.log(err);
    // })
    bcrypt.hash(password,saltRound,function(err,hash){
        console.log(hash);
        return hash;
    })
}
exports.signup = (req,res)=>{

    const {name,password}  = req.body
    // const password = req.body.password;
    // console.log(name,password);

    const codedpassword = bcrypt.hashSync(password,saltRound)
    // console.log(codedpassword);

    // return res.status(200).json({
    //     message: "Signup SucessFull",
    //     hashedpassword:codedpassword
    // })
    const signup = new SignupSchema({
        name:name,
        password:codedpassword
    })
    signup.save((err,data)=>{
        if(err)
        {
            console.log(err);
            res.status(500).json({
                message :"error saving password"
            })
        }else

        {
            console.log(codedpassword);
            res.status(200).json({
                message :"Password Saved SuccessFully",
                data:data
            })
        }
    })
}
exports.validate = (req,res)=>{
    const {name,password}  = req.body// shivam
    bcrypt.compare(password,"$2b$10$P/NCL4tHBvJYaz4axCDRLu4Geyrngr/rMI/Hyy6V6hFURSzTwEFOF06").then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
    res.status(200).json({
        message:"Data Validated"
    })    
}
exports.login = async (req,res)=>{
    const data = await SignupSchema.findOne({name:req.body.name})
    if (data) {//
        const compare = await bcrypt.compareSync(req.body.password,data.password)
        if(compare)
        {
            console.log(data);
            res.status(200).json({
                message:"Login Successfull",
                data:data
            })
        }else{
            
            res.status(500).json({
                message:"Try Again",
                
            })
        }
    }
    else
    {
        res.status(500).json({
            message:"userName Password not Found"
            
        })
    }
}
// exports.login = (req,res)=>{
//     const data = SignupSchema.findOne({name:req.body.name})
//     console.log(data);
//     if(data){
//         const compare = bcrypt.compare(req.body.password,data.password)
//         if(compare)
//         {
//             res.status(200).json({
//                 message:"Login SuccesFull",
//                 data:data
//             })
//         }else{
//             res.send("login failed")
//         }

//     }else
//     {
//         res.status(500).json({
//             message:"invalid UserName or Password",
//             data:data
//         })
//     }
// }