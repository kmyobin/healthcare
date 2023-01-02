import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import "../container.css"

/* 성별 입력 받기 */
function InfoContainer1() {
  const navigate = useNavigate();

  const onClickMale = () => {
    sessionStorage.setItem("gender", "male");
    navigate("/info2");
  }
  const onClickFemale = () => {
    sessionStorage.setItem("gender", "female");
    navigate("/info2");
  }
  return (
    <>
      <div style={{
          fontFamily : "var(--font-seoulhangang)",
        }}>
          <div style={{fontSize: "40px"}}>
            나의 성별은 ?            
          </div>
          <br />
          <button className="button" onClick={onClickMale}>
            남자
          </button>
          <br />
          <button className="button" onClick={onClickFemale}>
            여자
          </button>
      </div>
    </>
  )
}

export default InfoContainer1
