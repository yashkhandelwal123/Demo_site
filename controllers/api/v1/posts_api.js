const Post = require('../../../models/post')
const Comment = require('../../../models/comment');
const User = require('../../../models/user')
const { createIndexes } = require('../../../models/post');

module.exports.index = async function(req , res){

    let posts = await Post.find()
    .populate("user")
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    });

    return res.json(200 , {
        message: "List of post",
        posts : posts
    })
}

module.exports.destroy = async function(req, res){

    try {
        let posts = Post.findById(req.params.id );
            // .id means converting the object id into string
            // if (post.user == req.user.id){
                posts.remove();
    
                await Comment.deleteMany({post: req.params.id});

                    return res.json(200 , {
                        message : "Post deleted"
                    });
                // });
            // }else{
                // console.log('********' ,error);
                // return res.json(500 , {
                //     message: "internal server erroe"
                // });
            // }
    
        // });
        
    } catch (error) {
        console.log('*****' ,error);
                return res.json(500 , {
                    message: "internal server erroe"
                });
            // }
    
        
    }
    // Post.findById(req.params.id, function(err, post){
    //     // .id means converting the object id into string
    //     // if (post.user == req.user.id){
    //         post.remove();

    //         Comment.deleteMany({post: req.params.id}, function(err){
    //             return res.json(200 , {
    //                 message : "Post deleted"
    //             });
    //         });
    //     // }else{
    //         console.log('********' ,error);
    //         return res.json(500 , {
    //             message: "internal server erroe"
    //         });
    //     // }

    // });
}

module.exports.create = function(req,res){
    // if(req.body.password != req.body.confirm_password){
    //    return res.redirect('back');
    // }

    // let user = User.findOne({email : req.body.email})
       // console.log(user.email)
    //    if(err){
    //        console.log(`erroe in finding user in signning up`);
    //        return;
    //    }

    //    if(!user){
        var data = User(req.body);
        data.save()
        .then(item => {
            res.send("item save to data base");
        })
        .catch(err => {
            res.status(400).send("unable to save in data base");
        })

           User.create(req.body, function(err, user){
               if(err){console.log('error in creating user while signing up'); return}

               return res.redirect('/user/sign_in');
           })

    // //    }
    // //    else{
    //        return res.json(200 ,{
    //         message: "post created",
    //         users : user
    //        });
    //    }
    // }


}
