import { Header as Head } from "antd/es/layout/layout";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined, IdcardOutlined } from "@ant-design/icons";
import { ReactComponent as LogoImage } from "../images/zurich-logo-blue.svg";
import { useEffect, useState } from "react";
import { googleLogout } from "@react-oauth/google";
import { FaSignOutAlt } from "react-icons/fa";

const Header = (props) => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("/");
  useEffect(() => {
    let pathName = window.location.pathname;
    if (pathName !== "/") pathName = pathName.replaceAll("/", "");
    setSelectedMenu(pathName);
  }, []);
  const Logout = () => {
    navigate("/");
    googleLogout();
  };
  return (
    <Head>
      <div
        onClick={() => navigate("/")}
        style={{ float: "left", marginTop: 8, display: "flex" }}
      >
        <LogoImage />
      </div>
      <Menu
        mode="horizontal"
        selectedKeys={selectedMenu}
        theme="dark"
        style={{
          fontSize: 18,
          background: "hsla(0, 0%, 0%, 0)",
          justifyContent: "end",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu.Item
          key="home"
          onClick={() => navigate("/home")}
          icon={<HomeOutlined style={{ fontSize: 18 }} />}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="about"
          onClick={() => navigate("/error")}
          icon={<IdcardOutlined style={{ fontSize: 18 }} />}
        >
          About
        </Menu.Item>
        {props.addLogoutButton && (
          <Menu.Item
            key="logout"
            onClick={Logout}
            icon={<FaSignOutAlt style={{ fontSize: 18 }} />}
          >
            Logout
          </Menu.Item>
        )}
      </Menu>
    </Head>
  );
};

export default Header;
