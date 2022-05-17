import { Layout, Breadcrumb } from 'antd';
import ProductManageTable from '../../../components/modules/ProductManageTable'

const { Content } = Layout;
export default function ProductManage() {
  return (
    <Content style={{ padding: '0 50px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Product</Breadcrumb.Item>
      <Breadcrumb.Item>Manage</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-content">
      <ProductManageTable/>
    </div>
  </Content>
  )
}
