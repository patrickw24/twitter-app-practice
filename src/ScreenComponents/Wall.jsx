import { NewTweet } from "../Components/NewTweet"
import { TweetPosts } from "../Components/TweetPosts"
import { useEffect, useState } from "react"



export const Wall = ()=>{

    let user = window.localStorage.getItem("username")

    return(
        <>
        <h1> This is the wall! Welcome {user}</h1>
        <div className="container"> <NewTweet username={user}/> </div>
        <div> <TweetPosts /> </div>
        
        </>
    )

}