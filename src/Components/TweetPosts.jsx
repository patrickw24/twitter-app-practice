import React, { useDebugValue } from 'react'
import { useEffect, useState} from 'react'
import { PostFormat } from './PostFormat'


export const TweetPosts = ({tweets}) => {

   

    

    const [posts, setPosts] = useState([])
    const url = import.meta.env.VITE_URL
    const token = import.meta.env.VITE_TOKEN


    const getPosts = async ()=>{
        let newURL = `${url}/twitter_posts?order=id.desc`

        let response = await fetch (newURL,{
            method: 'GET',
            headers: {
                'apikey': token,
                'Authorization': token
            }
        })

        let data = []

        if (response.ok){
            data = await response.json()
           
            setPosts(data)
        }else{
            let err = await response.json()
            console.log(err)
        }
        console.log(data)

    }

    useEffect( ()=>{
        getPosts()

    }, [tweets])



  return (
    <>
    {
        posts.map( (item)=> (
            <PostFormat key={item.id} item={item} />
            
        ) )
    }
    
    
    </>
  )
}
