import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import "../container.css";
import Parser from "html-react-parser";
import axios from "axios";

const Wrapper = styled.div`
  /*display: ${(props) => (props.isShow === true ? "flex" : "none")}; */
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  align-items: center;
`;

function QNAConatiner(props) {
  const navigate = useNavigate();
  const baseURL = "http://localhost:8080";
  const contents = props.contents;

  const [questionNum, setQuestionNum] = useState(0);
  const [turn, setTurn] = useState(0);
  const [result, setResult] = useState(0);
  const [maximum, setMaximum] = useState(0);
  const [minimum, setMinimum] = useState(0);
  //const [score, setScore] = useState(0);

  const onConditionChange = (e) => {
    /*console.log(sessionStorage.getItem("gender"));
    console.log(sessionStorage.getItem("school"));
    console.log(sessionStorage.getItem("gs"));*/
    console.log("===========" + contents[questionNum].t);
    console.log("e.target.value : " + typeof e.target.value);
    var key = e.target.value;

    axios
      .post(baseURL + "/healthCare", {
        gs: sessionStorage.getItem("gs"),
        t: contents[questionNum].t,
      })
      .then((res) => {
        console.log(res);
        if (res.data !== 0) {
          // 점수 측정 방식
          // 최대, 최소 점수 산출
          if (contents[questionNum].pm < 0) {
            // 음수
            setMaximum(maximum + 100 - res.data);
            setMinimum(minimum - res.data);
          } else {
            // 양수
            setMaximum(maximum + res.data);
            setMinimum(minimum - (100 - res.data));
          }

          // 점수 산출
          var score;
          if (key === "0") {
            // 긍정 (1번)
            if (contents[questionNum].pm < 0) {
              score = -1 * res.data;
              //console.log("method: 1");
            } else {
              //console.log("method: 2");
              score = res.data;
            }
          } else {
            // 부정 (2번)
            if (contents[questionNum].pm < 0) {
              //console.log("method: 3");
              score = 100 - res.data;
            } else {
              //console.log("method: 4");
              score = -1 * (100 - res.data);
            }
          }
          console.log("현재 점수 : " + score);
          setResult(result + score);
        } else {
          console.log("NaN이라 안더했음");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setQuestionNum(questionNum + 1);
    //setTurn(turn + 1);
  };
  useEffect(() => {
    //setResult(score + result);
    console.log("result in useEffect : " + result);
    console.log("maximum in useEffect : " + maximum);
    console.log("minimum in useEffect : " + minimum);
  }, [result, maximum, minimum]);

  if (questionNum === props.questionNum) {
    console.log("누적 점수 : " + result);
    console.log("최대 점수 : " + maximum);
    console.log("최소 점수 : " + minimum);
    var sum = maximum - minimum;
    //var grade = 100 - ((result - minimum) / sum) * 100;
    var grade = ((result - minimum) / sum) * 100;
    console.log("백분위 : " + grade);
    sessionStorage.setItem(props.period, grade); // 저장
    if (props.time === 5) {
      navigate(props.next);
    } else {
      return (
        <Wrapper>
          <Container>
            <div
              style={{
                fontFamily: "var(--font-seoulhangang)",
                fontSize: "20px",
                margin: "10px",
              }}
            >
              {props.time}교시 종료!
            </div>
            <button
              style={{
                color: "black",
              }}
              onClick={() => {
                navigate(props.next);
              }}
              className="button"
            >
              {props.time + 1}교시 시작 ▶️
            </button>
          </Container>
        </Wrapper>
      );
    }
    //
  } else {
    return (
      <Wrapper>
        <Container>
          <div
            style={{
              fontFamily: "var(--font-seoulhangang)",
              fontSize: "20px",
              margin: "10px",
            }}
          >
            {questionNum + 1}. {Parser(contents[questionNum].q)}
          </div>
          <br /> <br />
          {contents[questionNum].answers.map((answer, i) => (
            <button
              style={{
                color: "black",
              }}
              key={i}
              idx={i}
              className="button"
              value={i}
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

export default QNAConatiner;
