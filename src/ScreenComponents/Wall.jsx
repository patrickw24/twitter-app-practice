import { NewTweet } from "../Components/NewTweet"
import { TweetPosts } from "../Components/TweetPosts"


export const Wall = ({})=>{

    let user = window.localStorage.getItem("username")

    return(
        <>
        <h1> This is the wall! Welcome {user}</h1>
        <div className="container"> <NewTweet /> </div>
        <div> <TweetPosts /> </div>
        </>
    )

}