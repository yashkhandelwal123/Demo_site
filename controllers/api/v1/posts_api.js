const Post = require('../../../models/post')
const Comment = require('../../../models/comment');

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