/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useField from "../../../hooks/useField";
import { Form, Input, Button, Select, InputNumber } from "antd";

function FormInput(props) {
  const { btnName, handleSubmit, list, data, setList, setData, form } = props;
  const { TextArea } = Input;
  const input = useField("text");
  const number = useField("number");
  const [image, setImage] = useState();

  const handleChange = (e) => {
    const value =
      typeof e === "number" ? e : typeof e === "string" ? e : e.target.value;
    const name =
      typeof e === "number"
        ? "quality"
        : typeof e === "string"
        ? "category"
        : e.target.name;
    // if (typeof e !== "string" && typeof e !== "number") {
    //   if (e.target.files && e.target.files[0]) {
    //     let img = e.target.files[0];
    //     setImage(URL.createObjectURL(img));
    //   }
    // }
    list.image = image;
    setList({ ...list, [name]: value });
  };
  useEffect(() => {
    const productList = JSON.parse(localStorage.getItem("products")) || [];
    setData(productList);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(data));
  }, [data]);
  
  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      autoComplete="off"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      // xóa đi để xài modal của update
      initialValues={{
        image: list.image,
        productName: list.productName,
        category: list.category,
        descriptions: list.descriptions,
        price: list.price,
        quality: list.quality,
      }}
      layout="horizontal"
    >
      <Form.Item label="Image">
        {image && <img className="input-img" src={image} alt="" />}
        <input
          // required
          type="file"
          name="image"
          // onChange={(e) => handleChange(e)}
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: "Please input your product name!" }]}
        label="Product Name"
        name="productName"
      >
        <Input
          name="productName"
          onChange={(e) => handleChange(e)}
          {...input}
          placeholder="Please enter somethings..."
        />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: "Please input your category!" }]}
        label="Category"
        name="category"
      >
        <Select onChange={(e) => handleChange(e)}>
          <Select.Option value="Apple">Apple</Select.Option>
          <Select.Option value="Samsung">Samsung</Select.Option>
          <Select.Option value="Vivo">Vivo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: "Please input your descriptions!" }]}
        name="descriptions"
        label="Descriptions"
      >
        <TextArea
          name="descriptions"
          onChange={(e) => handleChange(e)}
          rows={4}
          placeholder="Please write somethings..."
        />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: "Please input your price!" }]}
        name="price"
        label="Price"
      >
        <Input
          name="price"
          onChange={(e) => handleChange(e)}
          {...input}
          placeholder="Price..."
          style={{ width: 150 }}
        />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: "Please input your quality!" }]}
        name="quality"
        label="Quality"
      >
        <InputNumber onChange={(e) => handleChange(e)} {...number} min="0" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ float: "right", backgroundColor: "#40a9ff" }}
        >
          {btnName}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormInput;
