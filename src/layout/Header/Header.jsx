import React from 'react'
import styles from './Header.module.css'

function Header(props) {
  return (
    <header className={styles.header}>
      <contents className={styles.contents}>
        <div style={{ fontSize: "24px", paddingBottom: "25px",  paddingTop: "20px"}}>
          2023학년도 건강능력평가 문제지
        </div>
        <div style={{float: "left",  width: "18.5%",height: "80px", paddingLeft: "5px"}}>
          <div style={{height: "30px"}}>
          </div>
          <div style={{height: "20px", borderRadius: "25px", border: "1px solid #555555", 
          display: "flex", alignItems: "center", justifyContent: 'center', 
          }}>
            {props.period}
          </div> 
        </div>
        <div style={{
          fontSize: "50px",  float: "left",  width:"60%", height: "80px"
        }}>
          {props.area}
        </div>    
        <div style={{
          float: "left",  width: "18.5%", height: "80px", 
          fontSize: "14px", paddingRight: "5px"
        }}>
          <div style={{height: "30px"}}>
          </div>
          <div style={{height: "30px", }}>
            <table style={{
              width: "100%",
              border: "1px solid #444444",
              borderCollapse: "collapse",
            }}>
              <tr>
                <th style={{
                  border: "1px solid #444444",
                }}>성명</th>
                <th style={{
                  border: "1px solid #444444",
                }}>{props.name}</th>
              </tr>
            </table>            
          </div>

        </div>
      </contents>

    </header>
  );
}

export default Header
