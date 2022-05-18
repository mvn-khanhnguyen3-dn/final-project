import React from "react";
import { Descriptions } from "antd";

function InfoLayout({ data }) {
  return (
    <>
      <img
        style={{ marginTop: 10, marginBottom: 20 }}
        className="info-image"
        src={data.image}
        alt=""
      />
      <Descriptions column={2} title={data.productName} layout="horizontal">
        <Descriptions.Item label="ProductName">
          {data.productName}
        </Descriptions.Item>
        <Descriptions.Item label="Category">{data.category}</Descriptions.Item>
        <Descriptions.Item label="Price">{data.price} $</Descriptions.Item>
        <Descriptions.Item label="Quality">{data.quality}</Descriptions.Item>
        <Descriptions.Item label="Descriptions" span={2}>
          {data.descriptions}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
}
export default InfoLayout;
