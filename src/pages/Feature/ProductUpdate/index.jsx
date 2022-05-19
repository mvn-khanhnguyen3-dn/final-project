import { useState } from "react";
import { Layout, Breadcrumb } from "antd";
import { useParams, useHistory } from "react-router-dom";
import FormInput from "../../../components/layouts/FormInput";
import useNotification from "../../../hooks/useNotification";

const { Content } = Layout;
function ProductUpdate() {
  const { id } = useParams();
  let history = useHistory();

  const product = JSON.parse(localStorage.getItem("products"));
  const item = product.find((item) => item.id === parseInt(id));
  const [data, setData] = useState([]);
  const [list, setList] = useState(item);
  let { openNotification } = useNotification(
    "Update success",
    `${list.productName}`
  );
  const handleSubmit = () => {
    data.find(
      (productData) =>
        productData.id === list.id && [
          (productData.productName = list.productName),
          list.image !== undefined || null
            ? (productData.image = list.image)
            : productData.image,
          (productData.category = list.category),
          (productData.descriptions = list.descriptions),
          (productData.price = list.price),
          (productData.quality = list.quality),
        ]
    );
    setData([...data]);
    openNotification();
    history.push("/product/product-manage");
  };

  return (
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
          data={data}
          setData={setData}
          setList={setList}
        />
      </div>
    </Content>
  );
}
export default ProductUpdate;
