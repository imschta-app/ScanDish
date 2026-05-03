/* React */
import React, { useState } from "react";

/* Components */
import NavBtn from "@/components/sidemenu/nav-btn/NavBtn";

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
      {items.map((item) => (
        <NavBtn
          key={item.path}
          item={item}
          isOpen={isOpen}
        />
      ))}
    </div>
  );
};

export default Sidemenu;
