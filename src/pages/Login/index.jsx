import { useRef } from "react";
import React  from "react";
import "./style.css"
function Login() {

const username = useRef();
const password = useRef();


const handleSubmit = (e)=>{
    e.preventDefault();
}
let userName = username.current;
let passWord =  password.current;

if(userName === "login20" && passWord === "user1234"){
  localStorage.setItem("user" , true)
}
else{
  localStorage.setItem("user" , false)
}


  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <h4>Your logo</h4>
                <h2>Login</h2>
                <input
                ref={username}
                  type="text"
                  className="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                ref={password}
                  type="password"
                  className="login__input"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="button login__submit">
                <span className="button__text">Sign in</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
