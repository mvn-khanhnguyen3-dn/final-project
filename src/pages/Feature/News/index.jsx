import { useState, useEffect } from "react";
import { Table, Breadcrumb, Layout } from "antd";
import useColumn from "../../../hooks/useColumn";
import { apiProductsGetList } from "../../../api/products/products.api";

const { Column } = Table;
const { Content } = Layout;
function News() {
  const [fetchData, setFetchData] = useState([]);
  const productName = useColumn("productName", 150);
  const quanlity = useColumn("quanlity", 100);
  const category = useColumn("category", 250);
  const descriptions = useColumn("descriptions", 400);
  const price = useColumn("price", 150);

  useEffect(() => {
    const fetch = () => {
      apiProductsGetList().then((result) => {
        setFetchData(result.data);
      });
    };
    fetch();
    return () => {
      fetch();
    };
  }, []);
  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Product</Breadcrumb.Item>
        <Breadcrumb.Item>News</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Table dataSource={fetchData}>
          <Column {...productName} />
          <Column {...quanlity} />
          <Column {...category} />
          <Column {...descriptions} />
          <Column {...price} />
        </Table>
      </div>
    </Content>
  );
}

export default News;
