import React from "react";


export const PostFormat = ({item}) => {
  return (
    <div className="card container w-50 mt-5 p-3 bg-dark">
      <div className="card ">
        <div className="card-header">{item.user_name}</div>
        <div className="card-body">
          <h5 className="card-title">{item.tweet}</h5>
          <p className="card-text">
          {item.user_name}
          </p>
          
        </div>
      </div>
    </div>
  );
};
