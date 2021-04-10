const initialState = {
  mangSinhVien: [
    {
      maSinhVien: 1,
      tenSinhVien: "Nguyễn Văn A",
      soDienThoai: "0909090909",
      email: "nguyenvana@gmail.com",
    },
    {
      maSinhVien: 2,
      tenSinhVien: "Nguyễn Văn B",
      soDienThoai: "0909090909",
      email: "nguyenvanb@gmail.com",
    },
  ], //Du lieu sinh vien cua table

  sinhVienSua: {
    maSinhVien: 5,
    ten: "Nguyen Van E",
    soDienThoai: "0909090",
    email: "nguyenvane@gmail.com",
  },
};

export const QLSVReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEM_SV":
      return {
        ...state,
        mangSinhVien: [...state.mangSinhVien, action.sinhVien],
      };
    case "XOA_SV": {
      state.mangSinhVien = [...state.mangSinhVien].filter(
        (sv) => sv.maSinhVien !== action.maSinhVien
      );
      return { ...state };
    }
    case "SUA_SV": {
      state.sinhVienSua = state.mangSinhVien.find(
        (sv) => sv.maSinhVien === action.maSinhVien
      );
      return { ...state };
    }
    case "CAP_NHAP_SV": {
      let mangSVCapNhap = [...state.mangSinhVien];
      let index = mangSVCapNhap.findIndex(
        (sv) => sv.maSinhVien === action.sinhVienCapNhap.maSinhVien
      );
      if (index != -1) {
        mangSVCapNhap[index] = { ...action.sinhVienCapNhap };
      }
      state.mangSinhVien = mangSVCapNhap;
      return { ...state };
    }
  }
  return state;
};
