import { useState } from "react";
import { Table, Space, Modal, Form, Input } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import useColumn from "../../../hooks/useColumn";
import ModalDelete from "../ModalDelete";
import InfoLayout from "../../layouts/Info";
import ModalUpdate from "../ModalUpdate";
import { Link } from "react-router-dom";

const { Search } = Input;

const { Column } = Table;

function ProductManageTable() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleUpdate, setIsModalVisibleUpdate] = useState(false);
  const [form] = Form.useForm();
  const [idItem, setIdItem] = useState(0);
  const [filterInput, setFilterInput] = useState("");

  const products = JSON.parse(localStorage.getItem("products")) || [];

  const data = products.map((item) => ({
    key: item.id,
    image: item.image,
    ...item,
  }));

  const image = useColumn("image", 100);
  const productName = useColumn("productName", 150, "", (a, b) => a.id - b.id);
  const quality = useColumn("quality", 100);
  const category = useColumn("category", 100);
  const descriptions = useColumn("descriptions", 400);
  const price = useColumn("price", 150);
  const action = useColumn("action", 120);

  const handleView = (id) => {
    const dataView = data.find((item) => item.id === id);
    Modal.info({
      width: 600,
      centered: true,
      title: "Products detail",
      content: <InfoLayout data={dataView} />,
      onOk() {},
    });
  };

  const handleDelete = (id) => {
    setIsModalVisible(true);
    setIdItem(id);
  };
  //handelEdit của modal update
  // const handleEdit = (id) => {
  //   setIsModalVisibleUpdate(true);
  //   const dataView = data.find((item) => item.id === id);
  //   form.setFieldsValue(dataView);
  //   setIdItem(id);
  // };

  const handleOk = () => {
    setIsModalVisible(false);
    const newData = data.filter((e) => e.id !== idItem);
    localStorage.setItem("products", JSON.stringify(newData));
  };

  const filterData = () => {
    if (filterInput === "") return data;

    if (isNaN(filterInput)) {
      return products.filter(({ productName }) =>
        productName.toLocaleLowerCase().includes(filterInput)
      );
    }
  };

  return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={setFilterInput}
      />
      <Table dataSource={filterData()}>
        <Column
          {...image}
          render={(record) =>
            record && (
              <img
                width="80"
                height="80"
                style={{
                  borderRadius: 8,
                  objectFit: "cover",
                  textAlign: "center",
                }}
                src={record}
                alt="productName"
              />
            )
          }
        />
        <Column {...productName} />
        <Column {...quality} />
        <Column {...category} />
        <Column {...descriptions} />
        <Column {...price} />
        <Column
          {...action}
          render={(text, record) => (
            <>
              <Space size="middle">
                <EyeOutlined
                  className="btnView"
                  onClick={() => handleView(record.id)}
                />
                {/* nút click của handleEdit của modal */}
                {/* <EditOutlined
                  className="btnEdit"
                  onClick={() => handleEdit(record.id)}
                /> */}
                <Link to={`/product/update/${record.id}`}>
                  <EditOutlined />
                </Link>
                <DeleteOutlined
                  className="btnDelete"
                  onClick={() => handleDelete(record.id)}
                />
              </Space>
              <ModalUpdate
                dataUpdate={data}
                id={idItem}
                form={form}
                setIsModalVisibleUpdate={setIsModalVisibleUpdate}
                visible={isModalVisibleUpdate}
              />
              <ModalDelete
                data={data}
                id={idItem}
                visible={isModalVisible}
                handleOk={handleOk}
                handleCancel={() => setIsModalVisible(false)}
              />
            </>
          )}
        />
      </Table>
    </>
  );
}
export default ProductManageTable;
