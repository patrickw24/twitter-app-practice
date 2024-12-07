export const LogIn = () => {

    let username= ""

    const onChangHandler = (event)=>{
        username= event.target.value
        window.localStorage.setItem("username", username)

    }

    const onSubmitHandler = (event)=>{
        event.preventDefault()  
        window.location= "/wall"

    }


  return (
    <>
      <div className="container">
        <form>
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

          <button onSubmit={onSubmitHandler} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
