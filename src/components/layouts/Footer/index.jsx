import React, { memo } from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;
function PageFooter() {
  return (
    <Footer>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  )
}
export default memo(PageFooter);
