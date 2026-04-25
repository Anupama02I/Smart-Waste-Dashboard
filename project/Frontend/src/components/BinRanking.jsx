import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LabelList,
} from "recharts";

function BinRanking({ zone, data, loading, onSelectBin, selectedBin }) {
  if (!zone) {
    return <p style={{ color: "#888" }}>Select a zone to view ranking</p>;
  }

  if (loading) {
    return <p>Loading ranking...</p>;
  }

  if (!data || data.length === 0) {
    return <p style={{ color: "#888" }}>No data available for this selection</p>;
  }

  const values = data.map((d) => Number(d.avg_risk) || 0);
  const min = Math.min(...values);
  const max = Math.max(...values);

  const padding = Math.max((max - min) * 0.2, 1);
  const domainMin = Math.floor(min - padding);
  const domainMax = Math.ceil(max + padding);

  const normalize = (value) => {
    if (max === min) return 0.5;
    return (value - min) / (max - min);
  };

  const getColor = (value) => {
    const n = normalize(value);

    if (n >= 0.66) return "#dc2626";
    if (n >= 0.33) return "#f97316";
    return "#16a34a";
  };

  return (
    <div style={{ width: "100%", height: 420 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 60, left: 80, bottom: 20 }}
          barCategoryGap="20%"
        >
          <XAxis
            type="number"
            domain={[domainMin, domainMax]}
            tick={{ fill: "#cbd5e1" }}
            axisLine={{ stroke: "#475569" }}
            tickLine={{ stroke: "#475569" }}
          />

          <YAxis
            type="category"
            dataKey="bin"
            width={120}
            tick={{ fill: "#cbd5e1" }}
            axisLine={{ stroke: "#475569" }}
            tickLine={{ stroke: "#475569" }}
          />

          <Tooltip
            formatter={(value) => [Number(value).toFixed(2), "Avg Risk"]}
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          <Bar
            dataKey="avg_risk"
            barSize={36}
            onClick={(entry) => {
              const bin = entry?.bin || entry?.payload?.bin;
              if (bin) onSelectBin(bin);
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getColor(Number(entry.avg_risk) || 0)}
                stroke={selectedBin === entry.bin ? "#ffffff" : "none"}
                strokeWidth={selectedBin === entry.bin ? 3 : 0}
              />
            ))}

            <LabelList
              dataKey="avg_risk"
              position="right"
              offset={8}
              formatter={(value) => Number(value).toFixed(1)}
              fill="#ffffff"
              style={{ fontSize: "12px", fontWeight: "600" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BinRanking;