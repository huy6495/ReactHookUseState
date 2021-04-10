import React, { Component } from "react";
import TableSinhVien from "./TableSinhVien";
import { connect } from "react-redux";

class FormReact extends Component {
  state = {
    values: { maSinhVien: "", tenSinhVien: "", soDienThoai: "", email: "" },
    error: { maSinhVien: "", tenSinhVien: "", soDienThoai: "", email: "" },
  };

  handleChange = (event) => {
    let { name, value } = event.target;

    let typeProps = event.target.getAttribute("typeProps");

    let newValue = { ...this.state.values };
    let newError = { ...this.state.error };

    newValue[name] = value;

    if (newValue[name] === "") {
      newError[name] = "Không được bỏ trống";
    }

    if (typeProps === "email") {
      let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value)) {
        newError[name] = "Email không hợp lệ";
      } else {
        newError[name] = "";
      }
    }
    //Xu ly

    this.setState({ values: newValue, error: newError });
  };

  checkSubmit = (e) => {
    //Can su kien submit cua brower
    e.preventDefault();

    //Kiem tra du lieu hop le (tat ca key cua this.state.values phai khac rong & tat ca cac key cua errors phai = rong)
    let valid = true;
    //(1) duyet values

    let { values, error } = this.state;

    for (let key in values) {
      if (values[key] === "") {
        //this.stae.values["maSinhVien"]
        valid = false;
      }
    }

    for (let key in error) {
      if (error[key] !== "") {
        //this.stae.values["maSinhVien"]
        valid = false;
      }
    }

    if (!valid) {
      alert("Du lieu khong hop le");
      return;
    }

    this.props.dispatch({
      type: "THEM_SV",
      sinhVien: this.state.values,
    });
  };

  componentWillReceiveProps(newProps) {
    //Lay du lieu gan cho state
    this.setState({
      values: newProps.sinhVienSua,
    });
  }

  render() {
    let { maSinhVien, tenSinhVien, soDienThoai, email } = this.state.values;
    return (
      <div>
        <form onSubmit={this.checkSubmit} className="container">
          <div className="card text-white bg-dark">
            <div className="card-header">Thông tin sinh viên</div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Mã sinh viên</p>
                    <input
                      name="maSinhVien"
                      className="form-control"
                      onChange={this.handleChange}
                      value={maSinhVien}
                    />
                    <p className="text text-danger">
                      {this.state.error.maSinhVien}
                    </p>
                  </div>
                  <div className="form-group">
                    <p>Số điện thoại</p>
                    <input
                      name="soDienThoai"
                      className="form-control"
                      onChange={this.handleChange}
                      value={soDienThoai}
                    />
                    <p className="text text-danger">
                      {this.state.error.soDienThoai}
                    </p>
                  </div>
                  <div className="form-group">
                    <p>Tên Sinh Viên</p>
                    <input
                      name="tenSinhVien"
                      className="form-control"
                      onChange={this.handleChange}
                      value={tenSinhVien}
                    />
                    <p className="text text-danger">
                      {this.state.error.tenSinhVien}
                    </p>
                  </div>
                  <div className="form-group">
                    <p>Email</p>
                    <input
                      typeProps="email"
                      name="email"
                      className="form-control"
                      onChange={this.handleChange}
                      value={email}
                    />
                    <p className="text text-danger">{this.state.error.email}</p>
                  </div>
                  <button className="btn btn-success">Thêm sinh viên</button>
                  <button
                    type="button"
                    className="btn btn-primary ml-2"
                    onClick={() => {
                      this.props.dispatch({
                        type: "CAP_NHAP_SV",
                        sinhVienCapNhap: this.state.values, //Du lieu nguoi dung thay doi tren cac the input
                      });
                    }}
                  >
                    Cập nhập sinh viên
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <TableSinhVien />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sinhVienSua: state.QLSVReducer.sinhVienSua,
  };
};

export default connect(mapStateToProps)(FormReact);
