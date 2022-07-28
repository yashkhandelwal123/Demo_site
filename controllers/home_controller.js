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
    // Post.find().populate("user").exec().then(function(err,post){
    //         return res.render('home.ejs' , {
    //             title : "home",
    //             post : post
    //         });
    // })
    Post.find()
    .populate("user")
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec().then(results => {
        // console.log(results);
        return res.render('home.ejs', 
        { title : "home", 
        post: results });
    });


    // Post.find({}).lean().populate('user').exec(function(err,post){
    //     return res.render('home.ejs' , {
    //         title : "home",
    //         post : post
    //     });
    // });
}