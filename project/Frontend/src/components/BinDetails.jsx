function BinDetails({ summary }) {
  if (!summary) {
    return (
      <div style={{ border: "1px solid #334155", padding: "16px", borderRadius: "12px", width: "100%" }}>
        <h3>Bin Details</h3>
        <p style={{ color: "#94a3b8" }}>Select a zone and bin to view details.</p>
      </div>
    );
  }

  const items = [
    { label: "Bin", value: summary.binId },
    { label: "Zone", value: summary.zone },
    { label: "Date", value: summary.date },
    { label: "Temperature", value: summary.temperature.toFixed(1) + " °C" },
    { label: "Humidity", value: summary.humidity.toFixed(1) + " %" },
    { label: "Methane", value: summary.methane.toFixed(2) },
    { label: "Ammonia", value: summary.ammonia.toFixed(2) },
    { label: "CO2", value: summary.co2.toFixed(2) },
    { label: "CO", value: summary.co.toFixed(2) },
    { label: "NO2", value: summary.no2.toFixed(2) },
    { label: "Avg Risk", value: summary.avgRisk.toFixed(2) },
    { label: "Risk Level", value: summary.riskLevel },
  ];

  return (
    <div style={{ border: "1px solid #334155", padding: "16px", borderRadius: "12px", width: "100%" }}>
      <h3>Bin Details</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          marginTop: "14px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.label}
            style={{
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <div style={{ fontSize: "12px", color: "#94a3b8" }}>{item.label}</div>
            <div style={{ fontSize: "16px", fontWeight: 600 }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BinDetails;