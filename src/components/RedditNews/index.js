import React, {useState,useEffect} from "react";
import Box from "../Box";
import API from "../../helper/API"


const RedditNews = props => {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
      API.getHot(setPosts);
    },[])

    return(
        <React.Fragment>
            {
                posts && posts.map( (post,index) => <Box key={index} data={post}/>)
            }
        </React.Fragment>
    )
}

export default RedditNews;