import { useState, useEffect } from "react";
import { Table, Breadcrumb, Layout, Input } from "antd";
import useColumn from "../../../hooks/useColumn";
import { apiProductsGetList } from "../../../api/products/products.api";

const { Column } = Table;
const { Content } = Layout;
const { Search } = Input;
function News() {
  const [fetchData, setFetchData] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const productName = useColumn("productName", 150);
  const quanlity = useColumn("quanlity", 100);
  const category = useColumn("category", 100);
  const descriptions = useColumn("descriptions", 400);
  const price = useColumn("price", 100);

  useEffect(() => {
    let isCancelled = false;
    const fetch = () => {
      try {
         if (!isCancelled) {
        apiProductsGetList().then((result) => {
          setFetchData(result.data);
        });
      }
      } catch (error) {
        throw error;
      }
    };
    fetch();
    return () => {
      isCancelled = true;
    };
  }, []);
  const filterData = () => {
    if (filterInput === "") return fetchData;
    if (isNaN(filterInput)) {
      return fetchData.filter(({ productName }) =>
        productName.toLocaleLowerCase().includes(filterInput)
      );
    }
  };
  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Product</Breadcrumb.Item>
        <Breadcrumb.Item>News</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={setFilterInput}
        />
        <Table dataSource={filterData()}>
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
