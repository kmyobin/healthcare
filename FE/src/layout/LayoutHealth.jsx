import React from "react";
import HeaderHealth from "./Header/HeaderHealth";
import styles from "./Layout.module.css";

function LayoutHealth(props) {
  return (
    <div className={styles.layout}>
      <HeaderHealth area="건강 영역" />
      <main className={styles.main}> {props.children} </main>
    </div>
  );
}

export default LayoutHealth;
