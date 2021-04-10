const stateDefault = {
  danhSachGheDangDat: [],
};

export const baiTapDatVeReducer = (state = stateDefault, action) => {
  let dsMoi = [...state.danhSachGheDangDat];
  let index = dsMoi.findIndex((ghe) => ghe.soGhe === action.ghe.soGhe);
  let xoaGhe = (index) => {
    dsMoi.splice(index, 1);
    state.danhSachGheDangDat = dsMoi;
  };

  switch (action.type) {
    case "CHON_GHE": {
      if (index != -1) {
        xoaGhe(index);
        return { ...state };
      }
      dsMoi.push(action.ghe);
      state.danhSachGheDangDat = dsMoi;
      return { ...state };
    }
    case "XOA_GHE": {
      xoaGhe(index);
      return { ...state };
    }
  }
  return state;
};
