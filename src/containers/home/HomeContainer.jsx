import React, { useState } from 'react'
import style from "./Home.module.css"
import { useNavigate } from 'react-router-dom';
import  styled  from "styled-components";
import ToastNotification from './ToastNotification';

const InputField = styled.input`
  border-radius: 25px;
  background-color: #EEEEEE;
  height: 25px;
  font-family: 'seoulhangang';
  width: 180px;
  text-align: center;
`;

function HomeContainer() {
  const navigate = useNavigate();
  const [username, setUsername]  = useState("");
  const [toastState, setToastState] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(username.length ===  0){
      setToastMessage("이름을 입력하세요.");
      setToastState(true);
    }
    else if(username.length >= 5){
      setToastMessage("이름은 최대 4글자까지 가능합니다.")
      setToastState(true);
    }
    else{
      alert(`${username}님. 안녕하세요`);
      sessionStorage.setItem("name", username);
      navigate("/info1");          
    }
  }

  const  handleChange=({target:{value}}) => setUsername(value);

  return (
    <div style={{
      fontFamily: "seoulhangang",
      paddingTop: "90px"
    }}>
      <div style={{
        borderStyle : "solid", borderWidth: "2px",
        alignItems: 'center', justifyContent: 'center',
        marginLeft:  "35px", marginRight:  "35px",
        paddingTop: "20px", paddingBottom: "20px",
      }}>
        <div  style={{
          paddingBottom: "20px", fontSize:"18px"
        }}>
          ㅇ모든 문제에 거짓 없이 쓰시오.
          <br /><br />
          ㅇ생각나는대로  대답하시오.
          <br /><br />
          ㅇ문항에 표시된 배점을 참고하시오.    
        </div>

        <form onSubmit={handleSubmit}>
        이름 : &nbsp;           
        <InputField 
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <button className={style.button} type="submit">
            시작하기
          </button>
        </form>

        {toastState===true?(
          <ToastNotification setToastState={setToastState} toastMessage={toastMessage}/>  
        ) : null}
      </div>
    </div>
  )
}

export default HomeContainer
