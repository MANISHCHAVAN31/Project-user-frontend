import React from "react";
import "../style/Register.css";
const Register = () => {
  return (
    <div className="container-fluid">
      <div className="row" id="main">
        <div className="col-7 bg-success" id="container1"></div>
        <div className="col-5" id="container2">
          <div className="display-6 text-center fw-bold mt-5 mb-3">
            Assesshub
            <div className="h5 my-2">Sign up new user</div>
          </div>
          <div className="container col-10 fw-bold">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="confirmPassword"
                />
              </div>
              <div className="mb-3 d-grid">
                <button className="btn btn-lg btn-success">register</button>
              </div>
            </form>
            <div className="text-center">
              Don't have an account ?{" "}
              <span className="">
                <a href="#" className="link-success">
                  sign in
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
