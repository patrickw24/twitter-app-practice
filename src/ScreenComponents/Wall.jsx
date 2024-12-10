import { NewTweet } from "../Components/NewTweet"
import { TweetPosts } from "../Components/TweetPosts"
import { useState } from "react"



export const Wall = ()=>{

    let user = window.localStorage.getItem("username")
    const [tweets, setTweets] = useState(0)

    return(
        <>
        <h1 className="text-center display-3 mt-5">Welcome {user}!</h1>
        <div className="container"> <NewTweet username={user}  tweets={tweets} setTweets={setTweets}/> </div>
        <div> <TweetPosts tweets={tweets}/> </div>
        
        </>
    )

}