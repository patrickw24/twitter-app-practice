export const LogIn = () => {

    let username= ""

    const onChangHandler = (event)=>{
        username= event.target.value
        

    }

    const onSubmitHandler = (event)=>{
        event.preventDefault()  
       localStorage.setItem("username", username)
        window.location= "/wall"

    }


  return (
    <>
      <div className="container">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onChangHandler}
            ></input>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
