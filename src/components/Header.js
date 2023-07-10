import { Header as Head } from "antd/es/layout/layout";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined, IdcardOutlined } from "@ant-design/icons";
import { ReactComponent as LogoImage } from "../images/zurich-logo-blue.svg";
import { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { logout } from "../actions/authActions";
import { useDispatch } from "react-redux";

const menuItems = [
  {
    key: "home",
    title: "Home",
    label: "Home",
    icon: <HomeOutlined style={{ fontSize: 18 }} />,
  },
  {
    key: "error",
    title: "Unknown Page",
    label: "Unknown Page",
    icon: <IdcardOutlined style={{ fontSize: 18 }} />,
  },
  {
    key: "logout",
    title: "Logout",
    label: "Logout",
    icon: <FaSignOutAlt style={{ fontSize: 18 }} />,
  },
];

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState("/");
  useEffect(() => {
    let pathName = window.location.pathname;
    if (pathName !== "/") pathName = pathName.replaceAll("/", "");
    setSelectedMenu(pathName);
  }, []);
  const Logout = () => {
    dispatch(logout());
    navigate("/");
  };
  const onMenuClick = (event) => {
    const { key } = event;
    if (key === "logout") {
      Logout();
    }
    if (key === "home") {
      navigate("/");
    }
    if (key === "error") {
      navigate("/error");
    }
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
        items={menuItems}
        onClick={onMenuClick}
      ></Menu>
    </Head>
  );
};

export default Header;
