const stateDefault = {
  gioHang: [],
};

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHangCapNhap = [...state.gioHang];
      let index = gioHangCapNhap.findIndex(
        (sp) => sp.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhap[index].soLuong += 1;
      } else {
        gioHangCapNhap = [...gioHangCapNhap, action.spGioHang];
      }
      state.gioHang = gioHangCapNhap;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhap = [...state.gioHang];
      gioHangCapNhap.splice(action.index, 1);
      state.gioHang = gioHangCapNhap;
      return { ...state };
    }
    case "TANG_GIAM_123": {
      let gioHangCapNhap = [...state.gioHang];
      gioHangCapNhap[action.index].soLuong += action.tangGiam;
      if (gioHangCapNhap[action.index].soLuong === 0) {
        gioHangCapNhap[action.index].soLuong += 1;
      }
      state.gioHang = gioHangCapNhap;
      return { ...state };
    }
  }
  return state;
};
