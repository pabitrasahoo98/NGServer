const logoutToken=(user,statusCode,res)=>{
    const options={
        expires:new Date(
            Date.now()),
            secure: true,
            httpOnly:true,
            path: '/',
            sameSite: 'none'
        
    };
    res.status(statusCode).cookie("token",user,options).json({
        sucess:true,
        message:"logged out"
    });
};
module.exports=logoutToken