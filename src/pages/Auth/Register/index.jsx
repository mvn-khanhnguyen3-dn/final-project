import useMessage from "../../../hooks/useMessage";
import { Layout, Form, Input, Button, Checkbox } from "antd";
import { apiUsersPostList } from "../../../api/users/users.api";
import React from "react";
import { useDispatch } from "react-redux";
import { counter } from "../../../store/countUser";

const { Content } = Layout;

export default function Login() {
  let { openMessage, openMessageErr } = useMessage();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    if(values.password === values.verifyPassword){
      try {
        apiUsersPostList(values);
        dispatch(counter());
        openMessage();
      } catch (error) {
        openMessageErr();
      }
    }
    else{
      openMessageErr();
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
            <h3 className="login-title">Register</h3>
            <p className="login-desc">
              By register in you agree to the ridiculously long terms that you
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
              className="login-item"
              label="Verify Password"
              name="verifyPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your verify password!",
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
