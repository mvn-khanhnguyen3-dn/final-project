import { message } from 'antd';

function useMessage (title){
  const key = 'updatable';
  const openMessage = () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content: "Success", key, duration: 2 });
    }, 1000);
  };
  return{openMessage}
}
export default useMessage;
