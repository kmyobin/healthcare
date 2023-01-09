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

var data = [
  {
    subject: "식습관",
    user: 0,
    avg: 75,
    fullMark: 100,
  },
  {
    subject: "생활",
    user: 0,
    avg: 40,
    fullMark: 100,
  },
  {
    subject: "안전",
    user: 0,
    avg: 80,
    fullMark: 100,
  },
  {
    subject: "금단",
    user: 0,
    avg: 95,
    fullMark: 100,
  },
  {
    subject: "인터넷",
    user: 0,
    avg: 35,
    fullMark: 100,
  },
];

function ChartContainer(props) {
  for (var i = 0; i < props.data.length; i++) {
    data[i].user = props.data[i];
  }

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <ResponsiveContainer aspect={2}>
        <RadarChart /*outerRadius="80%"*/ data={data}>
          <PolarGrid stroke="black" />
          {/* PolarAngleAxis : 영역 */}
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar
            name={sessionStorage.getItem("name")}
            dataKey="user"
            fill="#CD5C5C"
            stroke="#CD5C5C"
            strokeWidth="2px"
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
