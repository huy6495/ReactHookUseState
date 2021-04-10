const stateDefault = {
  mangXucXac: [
    { nut: 1, hinhAnh: "./img/imgGame/1.png" },
    { nut: 1, hinhAnh: "./img/imgGame/1.png" },
    { nut: 1, hinhAnh: "./img/imgGame/1.png" },
  ],
  banChon: true, //true la Tai, false la xiu
  soBanThang: 0,
  soBanChoi: 0,
};

export const XucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "BAN_CHON": {
      let taiXiu = { ...state.banChon };
      taiXiu = action.trueFalse;
      state.banChon = taiXiu;
      return { ...state };
    }
    case "PLAY": {
      const arrXucXac = [
        { nut: 1, hinhAnh: "./img/imgGame/1.png" },
        { nut: 2, hinhAnh: "./img/imgGame/2.png" },
        { nut: 3, hinhAnh: "./img/imgGame/3.png" },
        { nut: 4, hinhAnh: "./img/imgGame/4.png" },
        { nut: 5, hinhAnh: "./img/imgGame/5.png" },
        { nut: 6, hinhAnh: "./img/imgGame/6.png" },
      ];
      let randomObject = (items) => {
        return items[Math.floor(Math.random() * items.length)];
      };
      let tongDiem = 0;
      let mangMoi = state.mangXucXac.map((item, index) => {
        item = randomObject(arrXucXac);
        tongDiem += item.nut;
        return item;
      });
      state.mangXucXac = mangMoi;
      let { soBanChoi, soBanThang } = state;
      soBanChoi += 1;
      state.soBanChoi = soBanChoi;
      if (
        (tongDiem < 12 && state.banChon === false) ||
        (tongDiem >= 12 && state.banChon === true)
      ) {
        soBanThang += 1;
        state.soBanThang = soBanThang;
      }
      return { ...state };
    }
  }

  return state;
};
