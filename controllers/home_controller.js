const Post =  require('../models/post')

module.exports.home = function(req ,res){
    // console.log(req.cookies);
   Post.find({} , function(err , post){
    return res.render('home.ejs' , {
        title : "home",
        post : post
    });
   });
    // return res.render('home.ejs' , {
    //     title : "home"
    // });
}