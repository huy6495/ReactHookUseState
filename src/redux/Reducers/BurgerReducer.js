const stateDefault = {
  burger: [
    { name: "salad", soLuong: 1, gia: 5 },
    { name: "cheese", soLuong: 1, gia: 7 },
    { name: "beef", soLuong: 1, gia: 10 },
  ],
};

export const BurgerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "TANG_GIAM": {
      let burgerMoi = [...state.burger];
      burgerMoi[action.index].soLuong += action.soLuong;
      if (burgerMoi[action.index].soLuong === 0) {
        burgerMoi[action.index].soLuong += 1;
      }
      state.burger = burgerMoi;
      return { ...state };
    }
  }
  return state;
};
