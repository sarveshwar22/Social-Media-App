const { Posts, Users } = require('../db/models')

async function createNewPost(userID,title,body){
    const post = await Posts.create({
        title,body,userID
    })

    return post
}

async function showAllPosts(query){

    const posts = await Posts.findAll()

    return posts
}

module.exports = {
    createNewPost,showAllPosts
}