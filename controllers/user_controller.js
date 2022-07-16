const User = require('../models/user');

module.exports.profile = function(req,res){
    
    if (req.cookies.user_id){
        console.log(req.cookies.user_id)
        User.findById(req.cookies.user_id, function(err, user){
            if (user){
                return res.render('./user_profile.ejs', {
                    title: "User Profile",
                    user: user
                })
            }else{
                return res.redirect('/users/sign_in');

            }
        });
    }else{
        return res.redirect('/users/sign_in');

    }
    //  return res.render('user_profile', {
    //                     title: "User Profile",
    //                     // user: user
    //                 })
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
     if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
     }

     User.findOne({email : req.body.email} , function(err ,user){
        // console.log(req.body.email);
        if(err){
            console.log(`erroe in finding user in signning up`);
            return;
        }

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/user/sign_in');
            })
        }else{
            return res.redirect('back');
        }
     });
 

}
module.exports.session = function(req,res){
    //  console.log(req.body.id)
    User.findOne({email: req.body.email} , function(err , user){
        // console.log(user.id)
        if(err){
            console.log(`erroe in finding user in signning up`);
            return;
        }
        if(user){
            if(user.password != req.body.password){
                return res.redirect('back');
            }

            res.cookie('user_id' , user.id);
            return res.redirect('/user/profile');
        }else{
            res.redirect('back'); 
        }

    });
}