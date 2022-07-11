module.exports.profile = function(req,res){
    return res.end('<h1>user profile</h1>');
}

module.exports.signUp = function(req ,res){
    return res.render('user_sign_up.ejs',{
        title :"sign up"
    });
}

module.exports.signIp = function(req ,res){
    return res.render('user_sign_in.ejs');
}
module.exports.create = function(req,res){
     
}
module.exports.session = function(req,res){
     
}