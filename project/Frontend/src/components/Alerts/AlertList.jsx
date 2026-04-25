function getColor(level) {
  if (level === "High") return "#ef4444";
  if (level === "Medium") return "#f97316";
  return "#16a34a";
}

function AlertList({ alerts, onSelect }) {
  return (
    <div>
      {alerts.map((a, i) => (
        <div
          key={i}
          onClick={() => onSelect(a)}
          style={{
            borderLeft: `5px solid ${getColor(a.risk_level)}`,
            padding: "12px",
            marginBottom: "10px",
            background: "#0f172a",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <div style={{ fontWeight: "bold" }}>
            {a.risk_level} Alert
          </div>

          <div style={{ fontSize: "13px", color: "#94a3b8" }}>
            {a.location} | {a.bin_id}
          </div>

          <div style={{ fontSize: "12px" }}>{a.time}</div>

          <div style={{ marginTop: "6px" }}>
            Odour Risk: {a.odour_risk}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AlertList;