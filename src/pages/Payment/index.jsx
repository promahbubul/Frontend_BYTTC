"use client";

import { Navigate, useLoaderData } from "react-router-dom";
import PdfTemplate from "../../components/PdfTemplate";

const Payment = () => {
  // const [data, setData] = useState({});
  const { data } = useLoaderData();

  
  if (data.success) {
    return (
      <div className="min-h-[calc(100vh-248px)]">
        
        <PdfTemplate student={data.data} />
      </div>
    );
  }

  return <Navigate to={"/"} />;
};
export default Payment;
