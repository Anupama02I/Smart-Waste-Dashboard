import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const generateTicks = (min, max) => {
  const start = Math.floor(min);
  const end = Math.ceil(max);

  const step = 2; // 🔥 change spacing here (2 = 28,30,32...)

  let ticks = [];
  for (let i = start; i <= end; i += step) {
    ticks.push(i);
  }

  return ticks;
};

// -------------------------------
// Tooltip (uses real levels)
// -------------------------------
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const risk = payload[0].value || 0;

    return (
      <div style={{
        background: "#0f172a",
        padding: "10px",
        borderRadius: "8px",
        color: "white",
        border: "1px solid #334155"
      }}>
        <p><b>Time:</b> {label}</p>
        <p><b>Avg Risk:</b> {risk.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

// -------------------------------
// Chart
// -------------------------------
function RiskLineChart({ data }) {

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const cleanedData = data.map(d => ({
    time: d.time,
    risk: Number(d.avg_risk),
    high_count: d.high_count
  }));

  const risks = cleanedData.map(d => d.risk);
  const min = Math.min(...risks);
  const max = Math.max(...risks);

  return (
    <div style={{
      width: "100%",
      height: 320,
      background: "#0f172a",
      padding: "15px",
      borderRadius: "12px"
    }}>
      <ResponsiveContainer>
        <LineChart data={cleanedData}>

          <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />

          <XAxis dataKey="time" stroke="#94a3b8" />

          <YAxis
            stroke="#94a3b8"
            domain={[Math.floor(min), Math.ceil(max)]}
            ticks={generateTicks(min, max)}
          />

          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="risk"
            stroke="#f97316"
            strokeWidth={3}
            dot={(props) => {
              const { cx, cy, payload } = props;

              // 🔴 ONLY use backend high_count
              if (payload.high_count > 0) {
                return <circle cx={cx} cy={cy} r={6} fill="#ef4444" />;
              }

              return <circle cx={cx} cy={cy} r={3} fill="#f97316" />;
            }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RiskLineChart;