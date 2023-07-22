import React from "react";
import "./style.css";

function LoginForm() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form action="">
          <div className="input">
            <label htmlFor="email">Email</label>

            <input type="email" className="email" id="email" />
          </div>

          <div className="input">
            <label htmlFor="pwd">Password</label>

            <input type="password" className="pwd" id="pwd" />
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
