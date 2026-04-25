import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

function FactorContributionScatter({
  scatterData,
  scatterXDomain,
  scatterYDomain,
  selectedMetricLabel,
  riskColors,
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 10, right: 20, left: 10, bottom: 30 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis
          type="number"
          dataKey="x"
          name={selectedMetricLabel}
          domain={scatterXDomain}
          tick={{ fill: "#cbd5e1", fontSize: 12 }}
          tickCount={6}
          allowDecimals
          tickFormatter={(v) => Number(v).toFixed(1)}
        />
        <YAxis
          type="number"
          dataKey="y"
          name="Odour Risk"
          domain={scatterYDomain}
          tick={{ fill: "#cbd5e1", fontSize: 12 }}
          tickCount={6}
          allowDecimals
          tickFormatter={(v) => Number(v).toFixed(1)}
        />
        <Tooltip
          contentStyle={{
            background: "#0f172a",
            border: "1px solid #334155",
            borderRadius: "10px",
            color: "#fff",
          }}
        />
        <Legend />
        <Scatter
          name="Low"
          data={scatterData.filter((d) => d.risk_level === "Low")}
          fill={riskColors.Low}
        />
        <Scatter
          name="Medium"
          data={scatterData.filter((d) => d.risk_level === "Medium")}
          fill={riskColors.Medium}
        />
        <Scatter
          name="High"
          data={scatterData.filter((d) => d.risk_level === "High")}
          fill={riskColors.High}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default FactorContributionScatter;