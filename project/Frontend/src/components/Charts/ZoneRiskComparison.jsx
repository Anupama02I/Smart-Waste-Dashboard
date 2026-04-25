import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function ZoneRiskComparison({ zoneData, zoneRiskDomain }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={zoneData}
        layout="vertical"
        margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis
          type="number"
          domain={zoneRiskDomain}
          tick={{ fill: "#cbd5e1" }}
          tickCount={6}
          allowDecimals
          tickFormatter={(v) => Number(v).toFixed(1)}
        />
        <YAxis
          type="category"
          dataKey="zone"
          width={90}
          tick={{ fill: "#cbd5e1", fontSize: 12 }}
        />
        <Tooltip
          contentStyle={{
            background: "#0f172a",
            border: "1px solid #334155",
            borderRadius: "10px",
            color: "#fff",
          }}
          formatter={(value) => [Number(value).toFixed(2), "Avg Odour Risk"]}
        />
        <Bar dataKey="avg_risk" barSize={40} fill="#38bdf8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ZoneRiskComparison;