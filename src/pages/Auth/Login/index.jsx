import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useMessage from "../../../hooks/useMessage";
import { Layout, Form, Input, Button, Checkbox } from "antd";

const { Content } = Layout;

export default function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  let { login } = useAuth();

  let { openMessage } = useMessage();

  const onFinish = () => {
    login({ user }, { password });
    openMessage();
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
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              onChange={(e) => setUser(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
