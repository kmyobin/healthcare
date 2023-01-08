import React from "react";
import {
  Radar,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadarChart,
  ResponsiveContainer,
  Legend,
} from "recharts";

function ChartContainer() {
  console.log(sessionStorage.getItem("eat"));
  console.log(sessionStorage.getItem("life"));
  console.log(sessionStorage.getItem("safe"));
  console.log(sessionStorage.getItem("drunk"));
  console.log(sessionStorage.getItem("internet"));

  var data = [
    {
      subject: "식습관",
      user: !isNaN(sessionStorage.getItem("eat"))
        ? sessionStorage.getItem("eat")
        : 0,
      avg: 75,
      fullMark: 100,
    },
    {
      subject: "생활",
      user: !isNaN(sessionStorage.getItem("life"))
        ? sessionStorage.getItem("life")
        : 0,
      avg: 40,
      fullMark: 100,
    },
    {
      subject: "안전",
      user: !isNaN(sessionStorage.getItem("safe"))
        ? sessionStorage.getItem("safe")
        : 0,
      avg: 80,
      fullMark: 100,
    },
    {
      subject: "금단",
      user: !isNaN(sessionStorage.getItem("drunk"))
        ? sessionStorage.getItem("drunk")
        : 0,
      avg: 95,
      fullMark: 100,
    },
    {
      subject: "인터넷",
      user: !isNaN(sessionStorage.getItem("internet"))
        ? sessionStorage.getItem("internet")
        : 0,
      avg: 35,
      fullMark: 100,
    },
  ];

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <ResponsiveContainer aspect={2}>
        <RadarChart outerRadius="80%" data={data}>
          <PolarGrid stroke="black" />
          {/* PolarAngleAxis : 영역 */}
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar
            name={sessionStorage.getItem("name")}
            dataKey="user"
            fill="#CD5C5C"
            fillOpacity={0.6}
          />
          {/*<Radar name="평균" dataKey="avg" fill="#9C9C9C" fillOpacity={0.5} />*/}
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartContainer;
