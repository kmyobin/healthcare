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
import contents from "./data";

function ChartContainer() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <ResponsiveContainer aspect={2}>
        <RadarChart outerRadius="80%" data={contents}>
          <PolarGrid stroke="black" />
          {/* PolarAngleAxis : 영역 */}
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 150]} />
          <Radar
            name={sessionStorage.getItem("name")}
            dataKey="user"
            fill="#CD5C5C"
            fillOpacity={0.6}
          />
          <Radar name="평균" dataKey="avg" fill="#9C9C9C" fillOpacity={0.5} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartContainer;
