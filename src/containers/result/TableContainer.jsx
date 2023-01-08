import moment from "moment/moment";
import React from "react";
import { Table } from "react-bootstrap";
import "../container.css";

function TableContainer() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();

  /* 수험번호 */
  const nowTime = moment().format("YYYYMMDD");

  var name, school, gender;
  name = sessionStorage.getItem("name");
  if (sessionStorage.getItem("school") === "e") {
    school = "초등학생";
  } else if (sessionStorage.getItem("school") === "m") {
    school = "중학생";
  } else {
    school = "고등학생";
  }
  if (sessionStorage.getItem("gender") === "male") {
    gender = "남자";
  } else {
    gender = "여자";
  }

  var arr = [
    sessionStorage.getItem("eat"),
    sessionStorage.getItem("life"),
    sessionStorage.getItem("safe"),
    sessionStorage.getItem("drunk"),
    sessionStorage.getItem("internet"),
  ];

  var grades = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 89) {
      grades[i] = 1;
    } else if (arr[i] >= 60) {
      grades[i] = 2;
    } else if (arr[i] >= 23) {
      grades[i] = 3;
    } else {
      grades[i] = 4;
    }
  }

  return (
    <div
      style={{
        paddingBottom: "10px",
        borderBottom: "1.5px solid #555555",
        marginLeft: "5px",
        marginRight: "5px",
      }}
    >
      {/* 행 : 6, 열 : 6 */}
      {/* 표준점수 = (자신의 원점수 - 자신이 속한 집단의 평균) / 표준편차 */}
      <Table
        bordered
        style={{
          border: "1px solid gray",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        <thead>
          <tr>
            <th>수험번호</th>
            <th colSpan={2}>성명</th>
            <th colSpan={2}>교육과정</th>
            <th>성별</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{nowTime}</td>
            <td colSpan={2}>{name}</td>
            <td colSpan={2}>{school}</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <th>구분</th>
            <td style={{ fontSize: "13px" }}>식습관 영역</td>
            <td style={{ fontSize: "13px" }}>생활 영역</td>
            <td style={{ fontSize: "13px" }}>안전 영역</td>
            <td style={{ fontSize: "13px" }}>금단 영역</td>
            <td style={{ fontSize: "13px" }}>인터넷 영역</td>
          </tr>
          <tr>
            <th>백분위</th>
            <td>{parseInt(sessionStorage.getItem("eat"))}</td>
            <td>{parseInt(sessionStorage.getItem("life"))}</td>
            <td>{parseInt(sessionStorage.getItem("safe"))}</td>
            <td>{parseInt(sessionStorage.getItem("drunk"))}</td>
            <td>{parseInt(sessionStorage.getItem("internet"))}</td>
          </tr>
          <tr>
            <th>등급</th>
            {grades.map((grade) => {
              return <td>{grade}</td>;
            })}
          </tr>
        </tbody>
      </Table>
      <div
        style={{
          paddingTop: "5px",
        }}
      >
        <div style={{ paddingBottom: "4px" }}>
          {year}.&nbsp;&nbsp;{month}.&nbsp;&nbsp;{date}.
        </div>
        <div>건강능력평가원장</div>
      </div>
    </div>
  );
}

export default TableContainer;
