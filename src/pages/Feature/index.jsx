import { Switch, Route } from "react-router-dom";
import ProductCreate from "./ProductCreate";
import ProductUpdate from "./ProductUpdate";
import ProductManage from "./ProductManage";
import News from "./News";
export default function Products() {
  return (
    <>
      <Switch>
        <Route exact path="/product/news">
          <News />
        </Route>
        <Route path="/product/create">
          <ProductCreate />
        </Route>
        <Route path="/product/update/:id" children={<ProductUpdate />}></Route>
        <Route path="/product/product-manage">
          <ProductManage />
        </Route>
      </Switch>
    </>
  );
}
