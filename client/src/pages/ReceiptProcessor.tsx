/* React */
import React from "react";

/* React Router */
import { Outlet } from "react-router-dom";

const ReceiptProcessor: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ReceiptProcessor;
