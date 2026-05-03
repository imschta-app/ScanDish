/* Sidemenu.ts */

/* React Icons */
import { MdDocumentScanner } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { FaBarcode } from "react-icons/fa6";

/* Interfaces */
import type { SidemenuItem } from "@/shared/interfaces/Sidemenu";

export const RECEIPT_PROCESSOR_ITEMS: SidemenuItem[] = [
  {
    name: "OCR",
    icon: MdDocumentScanner,
    path: "/receipt-processor/ocr",
  },
  {
    name: "Data Extraction",
    icon: IoAnalytics,
    path: "",
  },
  {
    name: "Data Enrichment",
    icon: FaBarcode,
    path: "",
  },
];
