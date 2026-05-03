/* Sidemenu.ts */

/* React Icons */
import { MdDocumentScanner } from "react-icons/md";

/* Interfaces */
import type { SidemenuItem } from "@/shared/interfaces/Sidemenu";

export const RECEIPT_PROCESSOR_ITEMS: SidemenuItem[] = [
  {
    name: "OCR",
    icon: MdDocumentScanner,
    path: "/receipt-processor/ocr",
  },
];
