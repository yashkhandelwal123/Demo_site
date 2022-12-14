const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('user_profile.ejs' , {
        title: 'user profile'
    });
}

module.exports.signUp = function(req ,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/profile')
    }
    return res.render('user_sign_up.ejs',{
        title :"sign up"
    });
}

module.exports.signIp = function(req ,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/profile')
    }
    return res.render('user_sign_in.ejs');
}

module.exports.create = function(req,res){
     if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
     }

     User.findOne({email : req.body.email} , function(err ,user){
        // console.log(user.email)
        if(err){
            console.log(`erroe in finding user in signning up`);
            return;
        }

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/user/sign_in');
            })

        }
        else{
            return res.redirect('back');
        }
     })
 

}

module.exports.session = function(req,res){
     return res.redirect('/');
}
module.exports.destroySession = function(req,res){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });

}; 