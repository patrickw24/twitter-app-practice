import React from "react";
import { TweetPosts } from "./TweetPosts";

export const PostFormat = ({item}) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">{item.created_at}</div>
        <div className="card-body">
          <h5 className="card-title">{item.user_name}</h5>
          <p className="card-text">
            {item.tweet}
          </p>
          
        </div>
      </div>
    </div>
  );
};
