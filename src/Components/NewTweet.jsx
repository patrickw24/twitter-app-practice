import React from "react";

export const NewTweet = () => {
  return (
    <>
      <div className="card mt-5">
        <div className="card-body">
          <textarea
            className="form-control mb-2"
            placeholder="Type what you're thinking"
          />

        <button className="btn btn-primary w-100"> Tweet </button>

        </div>
      </div>
    </>
  );
};
