import React from "react";
import { Modal, Descriptions } from "antd";

const ModalLayout = (props) => {
  const { data, id, visible ,handleCancel, handleOk} = props;
  return (
    <>
      <Modal
        title="Do you want to remove ?"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {data.map(
          (item) =>
            item.id === id && (
              <Descriptions key={item.id} title={item.productName}>
                <Descriptions.Item label="Id">{item.id}</Descriptions.Item>
                <Descriptions.Item label="Category">
                  {item.category}
                </Descriptions.Item>
                <Descriptions.Item label="Price">
                  {item.price}
                </Descriptions.Item>
                <Descriptions.Item label="Descriptions">
                  {item.descriptions}
                </Descriptions.Item>
              </Descriptions>
            )
        )}
      </Modal>
    </>
  );
};

export default ModalLayout;
