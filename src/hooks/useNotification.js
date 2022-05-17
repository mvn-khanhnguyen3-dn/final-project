import { notification } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

function Notification (title,desc){
  const openNotification = () => {
    notification.open({
      message: title,
      description:
        desc,
      icon: <CheckOutlined  />,
    });
  };
  return {openNotification}
}

export default Notification;
