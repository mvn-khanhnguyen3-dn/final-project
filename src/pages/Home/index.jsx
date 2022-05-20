import { memo } from "react";
import { Layout, Carousel } from "antd";
import slide1 from "../../assert/images/slide1.jpeg";
import slide2 from "../../assert/images/slide2.jpeg";
import slide3 from "../../assert/images/slide3.jpeg";

const contentStyle = {
  height: "100px",
  color: "#fff",
  lineHeight: "30px",
  textAlign: "center",
  background: "#364d79",
};
const { Content } = Layout;
function Home() {
  return (
    <Content className="page-home">
      <div className="site-layout-content">
        <Carousel autoplay>
          <div style={contentStyle}>
            <img className="slide-item" src={slide1} alt="" />
          </div>
          <div style={contentStyle}>
            <img className="slide-item" src={slide2} alt="" />
          </div>
          <div style={contentStyle}>
            <img className="slide-item" src={slide3} alt="" />
          </div>
        </Carousel>
        <div className="site-layout-right">
          <h3>Welcome to my Page Admin</h3>
          <p>
            Nowadays, most people search for products on the Internet instead of
            going to retail stores. That is why it is imperative for companies
            to use search engine optimization techniques to reach the TOP on the
            search engines of Google, Yahoo and Bing. Among those techniques,
            there is writing product descriptions. The job seems easy but always
            creates challenges.
          </p>
          <i>“It’s not a bug — it’s an undocumented feature”</i>
        </div>
      </div>
    </Content>
  );
}
export default memo(Home);
