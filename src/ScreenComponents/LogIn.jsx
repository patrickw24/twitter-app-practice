export const LogIn = () => {

    let username= ""

    const onChangHandler = (event)=>{
        username= event.target.value
        window.localStorage.setItem(username)

    }

    const onSubmitHandler = (event)=>{
        event.preventDefault()  
        window.location= "/"

    }


  return (
    <>
      <div className="container">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              onChange={onChangHandler}
            ></input>
          </div>

          <button onSubmit={onSubmitHandler} type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
