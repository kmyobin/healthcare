import React from "react";
import HeaderHealth from "./Header/HeaderHealth";
import styles from "./Layout.module.css";

function LayoutResult(props) {
  return (
    <div className={styles.layout}>
      <HeaderHealth area="성적 통지표" />
      <main className={styles.main} style={{ paddingTop: "10px" }}>
        {props.children}
      </main>
    </div>
  );
}

export default LayoutResult;
