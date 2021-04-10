import React, { Component } from "react";

export default class StateDemo extends Component {
  // State là thuộc tính có sẵn của component chứa các giá trị làm thay đổi giao diên khi người dùng thao tác
  state = {
    isLogin: false,
  };

  //   isLogin = false;
  userName = "huyhuy";

  renderUILogin = () => {
    if (this.state.isLogin) {
      return <span>Hello {this.userName}</span>;
    }
    return (
      <button
        onClick={() => {
          //   let newState = { isLogin: true };

          //   this.state.isLogin = true; khong duoc dung phuong thuc nay, mac du gia tri da duoc thay doi

          // Phai la this.setState(newState): la phuong thuc co san cua component react => dong thoi goi lai ham render
          //   console.log(this.state.isLogin); isLogin la phuong thuc bat dong bo
          this.setState({ isLogin: true }, () => {
            console.log("isLogin", this.state.isLogin);
          });
        }}
      >
        Đăng nhập
      </button>
    );
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  {this.isLogin === false
                    ? <span>Đăng Nhập</span>
                    : `Hello ${this.userName}`}
                </a> */}

                {this.renderUILogin()}
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
