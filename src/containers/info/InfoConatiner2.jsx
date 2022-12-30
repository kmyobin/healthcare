import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from "./Info.module.css"

/* 초/중/고 입력받기 */
function InfoConatiner2() {
  const navigate = useNavigate();

  const onClickE = () => {
    sessionStorage.setItem("school", "e");

    if(sessionStorage.getItem("gender") === "male"){
      sessionStorage.setItem("gs", "m_e");
    }
    else{
      sessionStorage.setItem("gs", "f_e");
    }
    navigate("/qna");
  }

  const onClickM = () => {
    sessionStorage.setItem("school", "m");

    if(sessionStorage.getItem("gender") === "male"){
      sessionStorage.setItem("gs", "m_m");
    }
    else{
      sessionStorage.setItem("gs", "f_m");
    }
    navigate("/qna");
  }

  const onClickH = () => {
    sessionStorage.setItem("school", "h");

    if(sessionStorage.getItem("gender") === "male"){
      sessionStorage.setItem("gs", "m_h");
    }
    else{
      sessionStorage.setItem("gs", "f_h");
    }
    navigate("/qna");
  }

  return (
    <>
      <div style={{
        fontFamily : "var(--font-seoulhangang)",
        }}>
          <div style={{fontSize: "40px"}}>
            나는 지금 ...           
          </div>
        <br />        <br />        <br />        <br />
        <button className={style.button} onClick={onClickE}>
          초등학생
        </button>
        <br />
        <button className={style.button} onClick={onClickM}>
          중학생
        </button>
        <br />
        <button className={style.button} onClick={onClickH}>
          고등학생
        </button>
      </div>
    </>
  )
}

export default InfoConatiner2
