import styles from './Header.module.css';

const HeaderLife = () => {
  return (
    <header className={styles.header}>
      <contents className={styles.contents}>
        <div style={{ fontSize: "24px", paddingBottom: "25px",  paddingTop: "20px"}}>
          2023학년도 건강능력평가 문제지
        </div>

        <div style={{float: "left",  width: "20%"}}>2교시</div>
        <div style={{
          fontSize: "50px",  float: "left",  width:"60%",
        }}>
          생활 영역
        </div>    
        <div style={{float: "left",  width: "20%"}}>&nbsp;&nbsp;</div>

      </contents>

    </header>
  );
};

export default HeaderLife;