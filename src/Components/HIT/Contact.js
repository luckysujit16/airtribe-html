import React, { Component } from "react";
import Courses from "./Courses";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      mobile: "",
      email: "",
      course: "",
    };
  }

  changeData = (e) => {
    // alert("Onchange");
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name + " : " + e.target.value);
  };

  submitHandler = (e) => {
    e.preventDefault();

    const { username, mobile, email, course } = this.state;

    const nameError = document.getElementById("nameError");
    const alphaExp = /^[a-zA-Z ]+$/;

    const mobileError = document.getElementById("mobileError");
    const numExp = /^[0-9]+$/;

    const emailError = document.getElementById("emailError");
    const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const courseError = document.getElementById("courseError");

    console.log(this.state);

    //Name Validation
    if (username === "") {
      nameError.innerHTML = "Name is Required";
    } else {
      if (username.match(alphaExp)) {
        nameError.innerHTML = "";
      } else {
        nameError.innerHTML = "Only Alaphabet Allowed";
      }
    }
    // Name Validation End
    // Mobile Number Validation
    if (mobile === "") {
      mobileError.innerHTML = "Mobile Number is Required";
    } else {
      if (mobile.match(numExp) && mobile.length == 10) {
        mobileError.innerHTML = "";
      } else {
        mobileError.innerHTML = "Not a valid number or Minmum 10 Digit";
      }
    }
    // Mobile Validation End
    // Email Validation
    if (email === "") {
      emailError.innerHTML = "Email is Required";
    } else {
      if (email.match(emailExp)) {
        emailError.innerHTML = "";
      } else {
        emailError.innerHTML = "Not a valid Email address";
      }
    }
    // Email Verification End
    // Course Validation
    if (course === "") {
      courseError.innerHTML = "Valid Course Name is must";
    } else {
      courseError.innerHTML = "";
    }
  };

  render() {
    const { username, mobile, email, course } = this.state;
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-12 col-lg-6 text-center">
            <h3 className="mb-5">Contact Us</h3>
            <form onSubmit={this.submitHandler}>
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                value={username}
                onChange={this.changeData}
                className="form-control mb-3"
              ></input>
              <p id="nameError"></p>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={mobile}
                onChange={this.changeData}
                className="form-control mb-3"
              ></input>
              <p id="mobileError"></p>
              <input
                type="text"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={this.changeData}
                className="form-control mb-3"
              ></input>
              <p id="emailError"></p>
              <input
                type="text"
                name="course"
                placeholder="Interested Course"
                value={course}
                onChange={this.changeData}
                className="form-control mb-3"
              ></input>
              <p id="courseError"></p>
              <input
                type="submit"
                className="form-control btn btn-success mb-3"
              ></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
