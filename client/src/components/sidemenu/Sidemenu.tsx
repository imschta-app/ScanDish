/* React */
import React, { useState } from "react";

/* React Icons */
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/* Components */
import NavBtn from "@/components/sidemenu/nav-btn/NavBtn";
import FabBtn from "@/components/buttons/fab-btn/FabBtn";

/* Stylesheet */
import styles from "./Sidemenu.module.scss";

/* Interfaces */
import type { SidemenuItem } from "@/shared/interfaces/Sidemenu";

interface SidemenuProps {
  items: SidemenuItem[];
}

const Sidemenu: React.FC<SidemenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className={`${styles.sidemenu} ${isOpen ? styles.open : styles.closed}`}
    >
      <div
        className={`${styles.header} ${isOpen ? styles.open : styles.closed}`}
      >
        {isOpen && (
          <h2 className={styles.title}>
            Receipt Processor
          </h2>
        )}
        <FabBtn
          icon={isOpen ? FaChevronLeft : FaChevronRight}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className={styles.content}>
        {items.map((item) => (
          <NavBtn
            key={item.path}
            item={item}
            isOpen={isOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidemenu;
