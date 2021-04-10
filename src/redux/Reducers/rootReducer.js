import { combineReducers } from "redux";
import ToDoList from "../../JSSComponent/DemoJSS/ToDoList";
import { baiTapDatVeReducer } from "./BaiTapDatVeReducer";
import { BurgerReducer } from "./BurgerReducer";
import { gioHangReducer } from "./gioHangProducer";
import { QLSVReducer } from "./QLSVReducer";
import { ToDoListReducer } from "./ToDoListReducer";
import { XucXacReducer } from "./XucXacReducer";

//Store tổng ứng dụng
export const rootReducer = combineReducers({
  //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
  GioHangReducer: gioHangReducer,
  BurgerReducer: BurgerReducer,
  XucXacReducer,
  baiTapDatVeReducer,
  ToDoListReducer,
  QLSVReducer,
});
