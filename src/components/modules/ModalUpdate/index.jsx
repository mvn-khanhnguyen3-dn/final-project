import { useState } from "react";
import { Layout, Breadcrumb, Modal } from "antd";
import FormInput from "../../../components/layouts/FormInput";
import useNotification from "../../../hooks/useNotification";

const { Content } = Layout;
function ModalUpdate(props) {
  const { id, dataUpdate, setIsModalVisibleUpdate, visible, form } = props;
  const [data, setData] = useState([...dataUpdate]);
  const [list, setList] = useState();

  let { openNotification } = useNotification("Update success");

  const handleSubmit = (values) => {
    data.find(
      (productData) =>
        productData.id === id && [
          (productData.productName = values.productName),
          (productData.category = values.category),
          (productData.image = list.image),
          (productData.descriptions = values.descriptions),
          (productData.price = values.price),
          (productData.quality = values.quality),
        ]
    );
    setData([...data]);
    setIsModalVisibleUpdate(false);
    openNotification();
  };

  return (
    <Modal
      title="Do you want to update ?"
      visible={visible}
      centered
      onOk={() => setIsModalVisibleUpdate(false)}
      onCancel={() => setIsModalVisibleUpdate(false)}
      footer={null}
      width={800}
    >
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
          <Breadcrumb.Item>Update</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <FormInput
            btnName="Update"
            handleSubmit={handleSubmit}
            list={list}
            form={form}
            data={data}
            setData={setData}
            setList={setList}
          />
        </div>
      </Content>
    </Modal>
  );
}
export default ModalUpdate;
