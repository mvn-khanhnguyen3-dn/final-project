import { memo } from "react";
import { PageHeader, Button, Tag, Typography } from "antd";

const { Paragraph } = Typography;

const content = (
  <>
    <Paragraph>
      My name is Nguyen Quoc Khanh, I am 22 years old, and I am a student at Duy
      Tan university at the moment. My major is program software, and I am
      studying in year three. I come from Ha Tinh, a province right next to Da
      Nang City. My family has four people 4 my parents, my little sister and I,
      but I have to live away from them due to my study.
      <br /> <br />
      Five years from now, I want to become a project manager of a construction
      project. As a project manager, my primary goals are managing people, set
      budgets, and making decisions of all kinds. I also want to speak English
      fluently so I can work with people from different countries.
    </Paragraph>
  </>
);
const Content = ({ children, extraContent }) => (
  <>
    <div className="account-content">{children}</div>
    <div className="account-image">{extraContent}</div>
  </>
);

function Account() {
  // const user = JSON.parse(localStorage.getItem("user")) || [];

  return (
    <Content className="page-account">
      <div className="account-container">
        <PageHeader
          style={{ textTransform: "capitalize" }}
          className="site-page-header"
          subTitle="Welcome back"
          tags={<Tag color="blue">Login</Tag>}
          extra={[
            <Button key="1" type="primary">
              {/* Hello {user && user.email.user} */}
            </Button>,
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
