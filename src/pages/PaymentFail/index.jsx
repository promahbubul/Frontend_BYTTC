import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <div className="">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/failed-payment-transaction-3d-icon-download-in-png-blend-fbx-gltf-file-formats--declined-error-notification-pack-e-commerce-shopping-icons-11133972.png?f=webp"
          alt=""
          className="size-40"
        />
      </div>
      <p className="text-3xl font-light text-red-400">Payment Fail. </p>
      <Link to={"/"} className="text-green-500 underline mt-5">Try Again</Link>
    </div>
  );
};
export default PaymentFail;
