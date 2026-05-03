/* React */
import React from "react";

/* React Router */
import { useNavigate } from "react-router-dom";

/* Stylesheet */
import styles from "./NavBtn.module.scss";

/* Interfaces */
import type { SidemenuItem } from "@/shared/interfaces/Sidemenu";

interface NavBtnProps {
  item: SidemenuItem;
  isOpen: boolean;
}

const NavBtn: React.FC<NavBtnProps> = ({
  item,
  isOpen,
}) => {
  const navigate = useNavigate();
  const Icon = item.icon;

  return (
    <button
      className={styles.nav_btn}
      onClick={() => navigate(item.path)}
    >
      {Icon && <Icon className={styles.icon} />}
      {isOpen && (
        <span className={styles.name}>{item.name}</span>
      )}
    </button>
  );
};

export default NavBtn;
