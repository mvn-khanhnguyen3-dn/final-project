import { useState } from "react";
import { Layout, Breadcrumb } from "antd";
import FormInput from "../../../components/layouts/FormInput";
import useNotification from "../../../hooks/useNotification";
import {useHistory} from 'react-router-dom'

const { Content } = Layout;

function ProductCreate() {
  const [data, setData] = useState([]);
  const [list, setList] = useState({
    image: null,
    productName: "",
    category: "",
    descriptions: "",
    price: "",
    quality: 0,
  });

  let { openNotification } = useNotification(
    "Create success",
    `${list.productName} added to the list`
  );

  const history = useHistory();
  const handleSubmit = () => {
    // const id = Math.floor(Math.random() * 10000);
    const id = data.length + 1;
    setData([...data, { id, ...list }]);
    openNotification();
    history.push("/product/product-manage");
  };

  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Product</Breadcrumb.Item>
        <Breadcrumb.Item>Create</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <FormInput
          btnName="Create"
          handleSubmit={handleSubmit}
          list={list}
          data={data}
          setList={setList}
          setData={setData}
        />
      </div>
    </Content>
  );
}
export default ProductCreate;
