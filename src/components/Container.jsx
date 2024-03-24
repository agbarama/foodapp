import { Children } from "react";
import styles from "../styles/container.module.css";

const Container = ({ children }) => {
  return <div className={styles.parentContainer}>{children}</div>;
};

export default Container;
