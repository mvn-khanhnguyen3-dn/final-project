import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useMessage from "../../../hooks/useMessage";
import { Layout, Form, Input, Button, Checkbox } from "antd";
import { apiUsersGetList } from "../../../api/users/users.api";
import dataDefault from "../dataDefault";
import { Link } from "react-router-dom";

const { Content } = Layout;

export default function Login() {
  const [userApi, setUserApi] = useState();

  let { login } = useAuth();

  let { openMessage, openMessageErr } = useMessage();

  useEffect(() => {
    try {
      apiUsersGetList().then((user) => {
        setUserApi(user.data);
      });
    } catch (error) {
      throw error;
    }
  }, []);

  const onFinish = (values) => {
    if (userApi) {
      if (
        userApi.find(
          (user) =>
            user.userName === values.userName &&
            user.password === values.password
        )
      ) {
        login(values.userName, values.password);
        localStorage.setItem("products", JSON.stringify(dataDefault));
        openMessage();
      } else {
        openMessageErr();
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Content className="page-login">
        <div
          style={{ background: "#e2e2e5" }}
          className="site-layout-content page-login flex center"
        >
          <div className="login-left">
            <h3 className="login-title">Login</h3>
            <p className="login-desc">
              By logging in you agree to the ridiculously long terms that you
              didn't bother to read
              <br />
              <Link
                to="/register"
                style={{
                  color: "blue",
                }}
              >
                You don't have an account?
              </Link>
            </p>
          </div>
          <Form
            className="login-form center"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              className="login-item"
              label="Username"
              name="userName"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="login-item"
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </>
  );
}
