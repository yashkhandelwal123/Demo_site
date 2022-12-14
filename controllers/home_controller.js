const Post =  require('../models/post')

module.exports.home = async function(req ,res){
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

    //the method below is causing a callback hell ,so to over come we are using asycn await
    // Post.find()
    // .populate("user")
    // .populate({
    //     path: 'comments',
    //     populate: {
    //         path: 'user'
    //     }
    // })
    // .exec().then(results => {
    //     // console.log(results);
    //     return res.render('home.ejs', 
    //     { title : "home", 
    //     post: results });
    // });


    try {
        let posts = await Post.find()
    .populate("user")
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    });

    // let users = 
    return res.render('home.ejs', 
        { title : "home", 
        post: posts 
    });
    } catch (err) {
        console.log('error', err);
        
    }

    

    // .exec().then(results => {
    //     // console.log(results);
        
    // });


    // Post.find({}).lean().populate('user').exec(function(err,post){
    //     return res.render('home.ejs' , {
    //         title : "home",
    //         post : post
    //     });
    // });
}