import React from "react";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <contents className={styles.contents}>
        <div className={styles.contents1}>2023학년도 건강능력평가 문제지</div>
        <div className={styles.contents2}>
          {/* 교시 */}
          <div className={styles.box1}>
            <div style={{ height: "60%" }}>&nbsp;</div>
            <div
              style={{
                height: "40%",
                borderRadius: "25px",
                border: "1px solid #555555",
              }}
            >
              {props.period}
            </div>
          </div>

          {/* 영역 */}
          <div className={styles.box2}>{props.area}</div>

          {/* 성명 */}
          <div className={styles.box3}>
            <div style={{ height: "60%" }}>&nbsp;</div>
            <div style={{ height: "40%" }}>
              <table>
                <tr>
                  <th className={styles.th}>성명</th>
                  <th className={styles.th}>{props.name}</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </contents>
    </header>
  );
}

export default Header;
