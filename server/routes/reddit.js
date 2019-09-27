const express = require('express');
const router =express.Router();

require('dotenv').config()

const snoowrap = require('snoowrap');
const passwordRequest = new snoowrap({
    userAgent: process.env.REDDIT_USERAGENT,
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD
})

router.get("/hot", (req,res) => {
    let data = []
    passwordRequest.getHot().then(response => {
        //response should be an array of posts
        response.map( post => {
            data.push({
                id: post.id,
                title: post.title,
                permalink: post.permalink
            })
        })
    }).then(() => {
        res.status(200).send(data);
    }).catch( error => {
        console.log(error);
        res.status(500).send(error);
    })
})

module.exports = router;