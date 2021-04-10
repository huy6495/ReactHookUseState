import logo from "./logo.svg";
import "./App.css";
import DemoFunction from "./Components/DemoComponent/DemoFunction";
import DemoClass from "./Components/DemoComponent/DemoClass";
import CardProduct from "./Components/DemoComponent/CardProduct";
import BaiTapLayout1 from "./Components/BaiTapLayout1/BaiTapLayout1";
import Databinding from "./Databinding/Databinding";
import BaiTapLayout from "./Components/BaiTapThucHanhLayout/BaiTapLayout";
import Styles from "./Components/Styles/Styles";
import HandleEvent from "./HandleEvent/HandleEvent";
import StateDemo from "./StateDemo/StateDemo";
import BaiTapChonXe from "./StateDemo/UseStateBaiTapChonXe";
import BaiTapVongLap from "./Components/BaiTapVongLap/BaiTapVongLap";
import RenderWithMap from "./RenderWithMap.js/RenderWithMap";
import BaiTapLayoutMap from "./RenderWithMap.js/BaiTapLayoutMap";
import DanhSachSPProps from "./Props/DemoProps/DanhSachSPProps";
import BaiTapPropsFunction from "./Components/BaiTapTruyenPropsFunction/BaiTapPropsFunction";
import Products from "./Props/BaiTapProps/Products";
import BTGioHangRedux from "./Components/BaiTapRedux/BTGioHangRedux";
import BTBurger from "./Components/BTBurger/BTBurger";
import BTXucXac from "./Components/BTGameXucXac/BTXucXac";
import BTDatVe from "./Components/BTDatVe/BTDatVe";
import UserProfile from "./FormValidation/UserProfile/UserProfile";
import DemoJSS from "./JSSComponent/DemoJSS/DemoJSS";
import FormReact from "./Components/FormReact/FormReact";
import DemoTheme from "./Components/Themes/DemoTheme";
import ToDoList from "./JSSComponent/DemoJSS/ToDoList";
import LifeCycle from "./LifeCycle2/LifeCycle";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout1 /> */}
      {/* <BaiTapLayout /> */}
      {/* <Databinding /> */}
      {/* <Styles />
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      <BaiTapChonXe />
      {/* <BaiTapVongLap /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapLayoutMap /> */}
      {/* <DanhSachSPProps /> */}
      {/* <BaiTapPropsFunction /> */}
      {/* <Products /> */}
      {/* <BTGioHangRedux /> */}
      {/* <BTBurger /> */}
      {/* <BTXucXac /> */}
      {/* <BTDatVe /> */}
      {/* <UserProfile /> */}
      {/* <DemoJSS /> */}
      {/* <FormReact /> */}
      {/* <DemoTheme /> */}
      {/* <ToDoList /> */}
      {/* <LifeCycle /> */}
    </div>
  );
}

export default App;
