import { Form, Input } from "antd";

const Filter = (props) => {
  const { onFinish } = props;
  return (
    <div className="filter">
      <Form name="filter-location" onFinish={onFinish}>
        <Form.Item name="location" label="Your city">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Filter;
