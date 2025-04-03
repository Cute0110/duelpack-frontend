import axiosInstance from "@/lib/action";
import { useAuth } from "@/lib/authContext";
import { dot, eot } from "@/lib/cryptoUtils";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { Input, notification, Select } from 'antd';
import type { NotificationArgsProps } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const PayPalButton = ({depositAmount}: any) => {
  const { authData } = useAuth();
  const [paymentId, setPaymentId] = useState(null);
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
  const [api, contextHolder] = notification.useNotification();
  const [amount, setAmount] = useState("");

  useEffect(() => {
    setAmount(depositAmount);
  }, [depositAmount]);

  const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
    api[type]({
      message: title,
      description: content,
      duration: 2,
      placement,
    });
  };

  const paypalCreateOrder = async () => {
    if (Number(amount) < 15 || amount == "") {
      openNotification("warning", "Warning", "Minimum value is 15$!", "topRight");
    } else {
      try {
        let response = await axiosInstance.post('api/create_order', eot({
          user_id: authData.id,
          order_price: amount
        }))
        const data = dot(response.data);
        console.log(data);
        return data.orderId;
      } catch (err) {
        console.log("Failed");
        // Your custom code to show an error like showing a toast:
        // toast.error('Some Error Occured')
        return null
      }
    }
  };

  const paypalCaptureOrder = async (orderID: any) => {
    try {
      let response = await axiosInstance.post('api/capture_order', eot({
        orderID
      }))
      const data = dot(response.data);
      if (data.success) {
        openNotification("success", "Success", "Deposit Success!", "topRight");
      } else {
        openNotification("error", "Error", "Deposit Failed!", "topRight");
      }
    } catch (err) {
      openNotification("error", "Error", "Deposit Failed!", "topRight");
    }
  };

  return (
    <>
      {contextHolder}
      <PayPalScriptProvider
        options={{
          clientId,
          currency: 'USD',
          intent: 'capture'
        }}
      >
        <PayPalButtons
          style={{
            color: 'gold',
            shape: 'rect',
            label: 'pay',
            height: 50
          }}
          createOrder={async (data, actions) => {
            let order_id = await paypalCreateOrder()
            return order_id + ''
          }}
          onApprove={async (data, actions) => {
            await paypalCaptureOrder(data.orderID)
          }}
          fundingSource="paypal" // Show only the PayPal button
        />
      </PayPalScriptProvider>
    </>
  );
};

export default PayPalButton;
