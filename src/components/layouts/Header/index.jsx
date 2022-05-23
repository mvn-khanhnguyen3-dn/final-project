import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Avatar, Badge } from "antd";
import useAuth from "../../../hooks/useAuth";
import useMessage from "../../../hooks/useMessage";
import {
  HomeOutlined,
  PlusCircleOutlined,
  PicRightOutlined,
  UserOutlined,
  LoginOutlined,
  DingtalkOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { apiUsersGetList } from "../../../api/users/users.api";

const { Header } = Layout;
const data = [
  {
    name: "PRODUCT MANAGE",
    link: "/product/product-manage",
    icon: <HomeOutlined />,
  },
  {
    name: "PRODUCT CREATE",
    link: "/product/create",
    icon: <PlusCircleOutlined />,
  },
  {
    name: "NEWS",
    link: "/product/news",
    icon: <DingtalkOutlined />,
  },
];
function PageHeader() {
  let { logout } = useAuth();
  let { openMessage } = useMessage();
  const [userApi, setUserApi] = useState();

  const [selectKey, setSelectKey] = useState(0);
  const key = "selectKey";
  const keySelect = JSON.parse(localStorage.getItem(key));

  const handleLogout = () => {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    if (userLocal) {
      openMessage();
      logout();
    }
  };
  useEffect(() => {
    try {
      apiUsersGetList().then((user) => {
        setUserApi(user.data);
      });
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(selectKey));
  }, [selectKey]);

  useEffect(() => {
    const keySelect = JSON.parse(localStorage.getItem(key));
    if (keySelect) {
      setSelectKey(keySelect);
    }
  }, []);

  const count = useSelector(
    (state) => userApi && userApi.length + state.count.value
  );
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <Link to="/">
            <PicRightOutlined /> SHOP
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={data.map((item, index) => {
            return {
              key: index,
              label: (
                <Link onClick={() => setSelectKey(index)} to={item.link}>
                  {" "}
                  {item.icon} {item.name}
                </Link>
              ),
            };
          })}
          defaultSelectedKeys={[`${keySelect}`]}
        />
        <ul className="socials">
          <li>
            <Link to="/account">
              <Badge count={count}>
                <Avatar shape="square" icon={<UserOutlined />} />
              </Badge>
            </Link>
          </li>
          <li>
            <LoginOutlined onClick={handleLogout} />
          </li>
        </ul>
      </Header>
    </Layout>
  );
}
export default memo(PageHeader);
