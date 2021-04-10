import React, { Component } from "react";
import "./UserProfile.css";
import Swal from "sweetalert2";

export default class UserProfile extends Component {
  state = {
    value: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    notiError: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  };

  capitalizeFirstLetter = (string) => {
    return (string.charAt(0).toUpperCase() + string.slice(1))
      .replace(/([A-Z])/g, " $1")
      .trim();
  };
  handleChange = (event) => {
    let { name, value, type } = event.target;

    let newValue = { ...this.state.value, [name]: value };
    let newError = { ...this.state.notiError };

    if (value.trim() === "") {
      newError[name] =
        "* " + this.capitalizeFirstLetter(name) + " không được bỏ trống";
    } else {
      newError[name] = "";
    }

    if (name === "email" && value !== "") {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(value)) {
        newError[name] = this.capitalizeFirstLetter(name) + " is valid!";
      } else {
        newError[name] = "";
      }
    }

    if (name === "passwordConfirm") {
      if (value === newValue.password) {
        newError[name] = "";
      } else {
        newError[name] = "Password are not matching";
      }
    }

    this.setState({ value: newValue, notiError: newError }, () => {});
  };

  handleSubmit = (event) => {
    //Can trinh duyet reload lai trang
    event.preventDefault();

    // Xet dieu kien submit
    let { value, notiError } = this.state;

    //Bien xac dinh form hop le
    let valid = true;

    let contentProfile = "";
    let contentError = "";

    for (let key in value) {
      if (value[key] === "") {
        valid = false;
      }

      if (key !== "password" && key !== "passwordConfirm")
        contentProfile += `<p><b>${this.capitalizeFirstLetter(key)}:</b> ${
          value[key]
        }</p>`;
    }

    for (let key in notiError) {
      if (notiError[key] !== "") {
        valid = false;
        contentError += `<p><b>${this.capitalizeFirstLetter(key)}:</b> ${
          notiError[key]
        }</p>`;
      }
    }

    if (!valid) {
      Swal.fire({
        title: "Error!",
        html: contentError,
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    } else {
      Swal.fire({
        title: "Your Profile!",
        html: contentProfile,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#EEEEEE",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={this.handleSubmit}
          className="bg-white p-5 m-5"
          style={{ width: "40%" }}
        >
          <h2 className="text-center mt-0">User Profile</h2>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    type="text"
                    name="firstName"
                    onChange={this.handleChange}
                    value={this.state.value.firstName}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>First Name</label>
                  <span
                    className="text-danger"
                    style={{ fontWeight: "light", fontSize: "12px" }}
                  >
                    {this.state.notiError.firstName}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    type="text"
                    name="lastName"
                    onChange={this.handleChange}
                    value={this.state.value.lastName}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Last Name</label>
                  <span
                    className="text-danger"
                    style={{ fontWeight: "light", fontSize: "12px" }}
                  >
                    {this.state.notiError.lastName}
                  </span>
                </div>
              </div>
              <div className="col-12">
                <div className="group">
                  <input
                    type="text"
                    name="userName"
                    onChange={this.handleChange}
                    value={this.state.value.userName}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>User Name</label>
                  <span
                    className="text-danger"
                    style={{ fontWeight: "light", fontSize: "12px" }}
                  >
                    {this.state.notiError.userName}
                  </span>
                </div>
              </div>
              <div className="col-12">
                <div className="group">
                  <input
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.value.email}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Email</label>
                  <span
                    className="text-danger"
                    style={{ fontWeight: "light", fontSize: "12px" }}
                  >
                    {this.state.notiError.email}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    type="text"
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.value.password}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Password</label>
                  <span
                    className="text-danger"
                    style={{ fontWeight: "light", fontSize: "12px" }}
                  >
                    {this.state.notiError.password}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    type="text"
                    name="passwordConfirm"
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.value.passwordConfirm}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Password Confirm</label>
                  <span
                    className="text-danger"
                    style={{ fontWeight: "light", fontSize: "12px" }}
                  >
                    {this.state.notiError.passwordConfirm}
                  </span>
                </div>
              </div>
              <div className="col-12">
                <button className="btn bt-success bg-dark text-white w-100">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
