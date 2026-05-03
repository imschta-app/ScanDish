/* React */
import React from "react";

/* React Router */
import { Outlet } from "react-router-dom";

/* Components */
import Sidemenu from "@/components/sidemenu/Sidemenu";

/* Interfaces */
import type { SidemenuItem } from "@/shared/interfaces/Sidemenu";

/* Stylesheet */
import styles from "./SidemenuLayout.module.scss";

interface SidemenuLayoutProps {
  items: SidemenuItem[];
}

const SidemenuLayout: React.FC<SidemenuLayoutProps> = ({
  items,
}) => {
  return (
    <div className={styles.sidemenu_layout}>
      <Sidemenu items={items} />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default SidemenuLayout;
