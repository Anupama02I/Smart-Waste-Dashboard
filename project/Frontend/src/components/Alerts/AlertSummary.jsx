function AlertSummary({ summary }) {
  const card = (title, value, color) => (
    <div
      style={{
        flex: 1,
        padding: "14px",
        borderLeft: `5px solid ${color}`,
        background: "#0f172a",
        borderRadius: "12px",
        minWidth: "140px",
      }}
    >
      <div style={{ fontSize: "12px", color: "#94a3b8" }}>{title}</div>
      <div style={{ fontSize: "22px", fontWeight: "bold", color: "#fff" }}>
        {value}
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
      {card("High Alerts", summary?.high_alerts || 0, "#ef4444")}
      {card("Medium Alerts", summary?.medium_alerts || 0, "#f97316")}
      {card("Low Alerts", summary?.low_alerts || 0, "#16a34a")}
      {card("Unresolved", summary?.unresolved_alerts || 0, "#eab308")}
    </div>
  );
}

export default AlertSummary;