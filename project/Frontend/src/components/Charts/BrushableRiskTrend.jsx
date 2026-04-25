import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Brush,
} from "recharts";

function BrushableRiskTrend({ data, domain, onBrushChange }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 28 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="date" tick={{ fill: "#cbd5e1", fontSize: 12 }} />
        <YAxis
          domain={domain}
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
          formatter={(value) => [Number(value).toFixed(2), "Avg Odour Risk"]}
        />
        <Line
          type="monotone"
          dataKey="avg_risk"
          stroke="#60a5fa"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6 }}
        />
        {data.length > 1 ? (
          <Brush
            dataKey="date"
            height={28}
            stroke="#94a3b8"
            onChange={(range) => {
              if (
                !range ||
                !Number.isInteger(range.startIndex) ||
                !Number.isInteger(range.endIndex)
              ) {
                onBrushChange(null);
                return;
              }
              onBrushChange(range);
            }}
          />
        ) : null}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default BrushableRiskTrend;