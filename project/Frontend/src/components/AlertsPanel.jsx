function AlertsPanel({ summary }) {
  if (!summary) {
    return (
      <div style={{ border: "1px solid #334155", padding: "16px", borderRadius: "12px", width: "100%" }}>
        <h3>Alerts</h3>
        <p style={{ color: "#94a3b8" }}>Select a zone and bin to view alerts.</p>
      </div>
    );
  }

  let message = "Normal condition.";
  let color = "#22c55e";

  if (summary.riskLevel === "High") {
    message = "High odour risk detected. Immediate attention required.";
    color = "#ef4444";
  } else if (summary.riskLevel === "Medium") {
    message = "Moderate odour risk. Monitor this bin closely.";
    color = "#f97316";
  }

  return (
    <div style={{ border: "1px solid #334155", padding: "16px", borderRadius: "12px", width: "100%" }}>
      <h3>Alerts</h3>

      <div style={{ marginTop: "10px", color: "#94a3b8" }}>
        {summary.binId} | {summary.zone} 
      </div>

      <div
        style={{
          marginTop: "14px",
          padding: "12px",
          borderRadius: "10px",
          background: "#0f172a",
          border: `1px solid ${color}`,
          color,
          fontWeight: 600,
        }}
      >
        {message}
      </div>

      <div style={{ marginTop: "12px", color: "#cbd5e1", fontSize: "14px" }}>
        Avg Risk: {summary.avgRisk.toFixed(2)} | Level: {summary.riskLevel}
      </div>
    </div>
  );
}

export default AlertsPanel;