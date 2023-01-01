import styles from './Header.module.css';

const HeaderGender = () => {
  return (
    <header className={styles.header}>
      <contents className={styles.contents}>
        <div style={{ fontSize: "24px", paddingBottom: "25px",  paddingTop: "20px"}}>
          2023학년도 건강능력평가 문제지
        </div>

        <div style={{float: "left",  width: "20%", height: "80px"}}>&nbsp;&nbsp;</div>
        <div style={{
          fontSize: "50px",  float: "left",  width:"60%", height: "80px"
        }}>
          성별 영역
        </div>    
        <div style={{
          float: "left",  width: "20%", height: "80px", 
          fontSize: "14px", 
        }}>
          <div style={{height: "30px"}}>
          </div>
          <div style={{height: "30px", paddingRight: "5px"}}>
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
                }}>{sessionStorage.getItem("name")}</th>
              </tr>
            </table>            
          </div>

        </div>
      </contents>

    </header>
  );
};

export default HeaderGender;