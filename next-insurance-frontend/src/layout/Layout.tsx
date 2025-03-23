import banner from "../assets/banner.png";
import { ILayout } from "./types";
import "./style.css"

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <div className="layout-top-bar">
        <img src={banner} />
      </div>

      <div className="layout-content">{children}</div>

      <div className="layout-footer"></div>
    </div>
  );
};

export default Layout;
