import React from "react";
import { Table } from "react-bootstrap";
import "../container.css";

function TableContainer() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();

  return (
    <div
      style={{
        paddingBottom: "10px",
        borderBottom: "1.5px solid #555555",
      }}
    >
      {/* 행 : 6, 열 : 6 */}
      {/* 표준점수 = (자신의 원점수 - 자신이 속한 집단의 평균) / 표준편차 */}
      <Table
        bordered
        style={{
          border: "1px solid gray",
          width: "95%",
        }}
      >
        <tbody>
          <tr>
            <th>수험번호</th>
            <th colSpan={2}>성명</th>
            <th>생년월일</th>
            <th colSpan={2}>성별</th>
            {/*<th>출신고교</th>*/}
          </tr>

          <tr>
            <td>12345678</td>
            <td colSpan={2}>김효빈</td>
            <td>01.05.16</td>
            <td colSpan={2}>여</td>
            {/*<td>남성여자고등학교</td>*/}
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
            <th>표준점수</th>
            <td>131</td>
            <td>131</td>
            <td>22</td>
            <td>55</td>
            <td>65</td>
          </tr>
          <tr>
            <th>백분위</th>
            <td>99</td>
            <td>78</td>
            <td>124</td>
            <td>124</td>
            <td>55</td>
          </tr>
          <tr>
            <th>등급</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
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
