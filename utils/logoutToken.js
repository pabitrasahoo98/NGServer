const logoutToken=(user,statusCode,res)=>{
    const options={
        expires:new Date(
            Date.now() + 10 * 60 * 1000),
            secure: true,
            httpOnly:true,
            path: '/',
            sameSite: 'none'
        
    };
    res.status(statusCode).cookie("token1",user,options).json({
        sucess:true,
        message:"logged out"
    });
};
module.exports=logoutToken