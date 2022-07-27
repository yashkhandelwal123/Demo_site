const Post =  require('../models/post')

module.exports.home = function(req ,res){
    // console.log(req.cookies);
//    Post.find({} , function(err , post){
//     return res.render('home.ejs' , {
//         title : "home",
//         post : post
//     });
//    });
    // return res.render('home.ejs' , {
    //     title : "home"
    // });
    Post.find({}).populate('user.users').exec(function(err, posts){
        return res.render('home', {
            title: "Home",
            posts:  posts
        });
    })


    // Post.find({}).lean().populate('user').exec(function(err,post){
    //     return res.render('home.ejs' , {
    //         title : "home",
    //         post : post
    //     });
    // });
}