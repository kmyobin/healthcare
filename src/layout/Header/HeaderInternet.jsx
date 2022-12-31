import React from 'react'
import styles from './Header.module.css'

function HeaderInternet() {
  return (
    <header className={styles.header}>
      <contents className={styles.contents}>
        <div style={{ fontSize: "24px", paddingBottom: "25px",  paddingTop: "20px"}}>
          2023학년도 건강능력평가 문제지
        </div>

        <div style={{float: "left",  width: "20%"}}>4교시</div>
        <div style={{
          fontSize: "35px",  float: "left",  width:"60%",
        }}>
          TV 및 인터넷 영역
        </div>    
        <div style={{float: "left",  width: "20%"}}>&nbsp;&nbsp;</div>

      </contents>

    </header>
  );
}
export default HeaderInternet
