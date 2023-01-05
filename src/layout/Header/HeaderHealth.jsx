import styles from "./Header.module.css";

const HeaderHealth = (props) => {
  return (
    <header className={styles.header}>
      <contents className={styles.contents}>
        <div className={styles.contents1}>2023학년도 건강능력평가 문제지</div>
        <div className={styles.contents2}>
          {/* 교시 */}
          <div className={styles.box1}>
            <div>&nbsp;</div>
          </div>

          {/* 영역 */}
          <div className={styles.box2}>{props.area}</div>

          {/* 성명 */}
          <div className={styles.box3}>
            <div>&nbsp;</div>
          </div>
        </div>
      </contents>
    </header>
  );
};

export default HeaderHealth;
