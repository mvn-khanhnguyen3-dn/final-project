import { message } from 'antd';

function useMessage (){
  const key = 'updatable';
  const openMessage = () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content:  "Success", key, duration: 2 });
    }, 1000);
  };
  const openMessageErr = () => {
    const key = "updatable";
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.error({ content: "Login failed", key, duration: 2 });
    }, 1000);
  };
  return{openMessage,openMessageErr}
}
export default useMessage;
