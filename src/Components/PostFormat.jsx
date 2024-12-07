import React from "react";
import { TweetPosts } from "./TweetPosts";

export const PostFormat = ({item}) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">{item.user_name}</div>
        <div className="card-body">
          <h5 className="card-title">{item.tweet}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
