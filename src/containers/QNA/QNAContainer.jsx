import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import "../container.css"
import Parser from 'html-react-parser';
import axios from 'axios';

const Wrapper = styled.div`
  /*display: ${props => props.isShow === true ? 'flex' : 'none'}; */
  width:100%;
  height:100vh;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const Container = styled.div`
    margin-bottom:3rem;
    text-align:center;
    align-items:center;
`

function QNAConatiner(props) {   
  const navigate=useNavigate();
  const baseURL="http://localhost:8080";
  const contents=props.contents;

  const [questionNum, setQuestionNum] = useState(0);
  const [turn, setTurn] = useState(0);
  const [result, setResult] = useState(0);

  const onConditionChange = (key) => {
    
    let record=contents[questionNum].pm;
    
    console.log(sessionStorage.getItem("gender"));
    console.log(sessionStorage.getItem("school"));
    console.log(sessionStorage.getItem("gs"));
    console.log(contents[questionNum].t);

    axios.post(baseURL+ "/healthCare",{
      gs: sessionStorage.getItem("gs"), 
      t: contents[questionNum].t,
    })
    .then((res) => {
      console.log(res);
      if(!isNaN(res.data)){
        var weight = parseFloat(res.data);
        var score=record * (10 - weight/10);
        console.log("score : " + score);
        setResult(result+score);
        console.log("result : " + result);
      }
      else{
        console.log("NaN이라 안더했음")
      }

    })
    .catch((error)=> {
      console.log(error);
    })

    setQuestionNum(questionNum+1);
    setTurn(turn+1);
  }
  
  if (questionNum === props.questionNum){ // 
    navigate(props.next);
  }
  else {
    return (
      <Wrapper>
          <Container>
            <div style={{
              fontFamily : "var(--font-seoulhangang)",
              fontSize: "20px",
              margin: "10px",
            }}>{questionNum+1}. {Parser(contents[questionNum].q)}</div>
            <br /> <br />
            {contents[questionNum].answers.map((answer, i)=> (
              <button 
              style={{
                color: "black",
              }}
              key={i}
              idx={i}
              className="button" 
              onClick={onConditionChange} 
              >
                {Parser(answer.text)}
              </button>  
              
            ))}
          </Container>      
      </Wrapper>
    );
  }
}

export default QNAConatiner
