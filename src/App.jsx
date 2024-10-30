import { BrowserRouter, Link } from "react-router-dom";
import "./style/style.css";
import ScrollToTop from "./components/common/ScrollToTop";
import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from "./components/common/SideBar";

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
      <div className="d-flex ">
        <SideBar></SideBar>
        <div className="w-100">
          <AppRouter ></AppRouter>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
