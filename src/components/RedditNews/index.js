import React from "react";
import snoowrap from "snoowrap";
import Box from "../Box";

const passwordRequest = new snoowrap({
    userAgent: "script:script-test:v1.0 (by r/RightmostHoplite)",
    clientId: "4w3MahEers4eoA",
    clientSecret: "fslyhBJpZqpeCmnfI68RYQmraP4",
    username: "RightmostHoplite",
    password: "manticore92"
})

const RedditNews = props => {
    return(
        passwordRequest.getHot().then(
            posts => posts.map((post, index) => {
                console.log(post.title)
                return (
                    <Box key={index} id={post.id}>
                        <h1>{post.title}</h1>
                        <a href={'https://www.reddit.com' + post.permalink}>Link</a>
                    </Box>
                )
            }))
    )
}

export default RedditNews;