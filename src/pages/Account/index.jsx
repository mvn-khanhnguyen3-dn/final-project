import { memo } from "react";
import { PageHeader, Dropdown, Button, Tag, Typography, Row } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const DropdownMenu = () => (
  <Dropdown key="more" placement="bottomRight">
    <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
  </Dropdown>
);

const IconLink = ({ src, text }) => (
  <a className="example-link" href="*#">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const content = (
  <>
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level
      color system and a product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color
      model, which makes it easier for designers to have a clear psychological
      expectation of color when adjusting colors, as well as facilitate
      communication in teams.
    </Paragraph>
    <div>
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Quick Start"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text=" Product Info"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Product Doc"
      />
    </div>
  </>
);
const Content = ({ children, extraContent }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
    <div className="image">{extraContent}</div>
  </Row>
);

function Account() {
  const user = JSON.parse(localStorage.getItem("user")) || [];

  return (
    <Content className="page-account">
      <div className="account-container">
        <PageHeader
          title="Title"
          className="site-page-header"
          subTitle="This is a subtitle"
          tags={<Tag color="blue">Running</Tag>}
          extra={[
            <Button key="1" type="primary">
              Hello {user && user.email.user}
            </Button>,
            <DropdownMenu key="more" />,
          ]}
          avatar={{
            src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
          }}
        >
          <Content
            extraContent={
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                alt="content"
                width="100%"
              />
            }
          >
            {content}
          </Content>
        </PageHeader>
      </div>
    </Content>
  );
}
export default memo(Account);
