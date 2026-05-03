/* React */
import React from "react";

/* React Router */
import { Routes, Route } from "react-router-dom";

/* Layouts */
import SidemenuLayout from "@/utils/layout/sidemenu-layout/SidemenuLayout";

/* Pages */
import ReceiptProcessor from "@/pages/ReceiptProcessor";
import OCR from "@/pages/OCR";

/* Constants */
import { RECEIPT_PROCESSOR_ITEMS } from "@/shared/constants/Sidemenu";

/* Stylesheet */
import "@/variables.scss";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<SidemenuLayout items={RECEIPT_PROCESSOR_ITEMS} />}>
        <Route
          path="/receipt-processor"
          element={<ReceiptProcessor />}
        >
          <Route path="ocr" element={<OCR />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
