import React from "react";

export const NewTweet = ({ tweets, setTweets, username }) => {
  let description = "";

  const url = import.meta.env.VITE_URL;
  const token = import.meta.env.VITE_TOKEN;

  const onChangeHandler = (event) => {
    description = event.target.value;
  }


  const postTweet = async () => {
    const newUrl = `${url}/twitter_posts`;
    let description = "";

    let tmp = {
      user_name: username,
      tweet: description,
    };

    let response = await fetch(newUrl, {
      method: "POST",
      headers: {
        apikey: token,
        Authorization: token,
        'Content-Type': "application/json",
      },
      body: JSON.stringify(tmp),
    });

    if (response.ok) {
        setTweets(tweets + 1);
    } else {
      let err = await response.json();
      console.log(err);
    }
  };

  
  return (
    <>
      <div className="card mt-5">
        <div className="card-body">
          <textarea
            onChange={onChangeHandler}
            className="form-control mb-2"
            placeholder="Type what you're thinking"
          />

          <button onClick={postTweet} className="btn btn-primary w-100">
            {" "}
            Tweet{" "}
          </button>
        </div>
      </div>
    </>
  );
};
