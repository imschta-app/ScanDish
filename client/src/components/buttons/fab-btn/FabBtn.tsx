/* React */
import React from "react";

/* React Icons */
import type { IconType } from "react-icons";

/* Stylesheet */
import styles from "./FabBtn.module.scss";

interface FabBtnProps {
  icon: IconType;
  onClick: () => void;
}

const FabBtn: React.FC<FabBtnProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button className={styles.fab_btn} onClick={onClick}>
      <Icon className={styles.icon} />
    </button>
  );
};

export default FabBtn;
