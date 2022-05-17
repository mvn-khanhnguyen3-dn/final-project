import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
// import apiUser from '../../../api/apiUser'

const { Meta } = Card;

function CardLayout() {
  const userLocal = JSON.parse(localStorage.getItem('user'));

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta style={{textTransform:"uppercase"}}
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={"Welcome " + userLocal.email.user}
        description="I'm glad to see you here"
      >
        {/* <p>{apiUser}</p> */}
      </Meta>
    </Card>
  );
}
export default CardLayout;
