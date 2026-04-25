function AlertDetails({ alert }) {
  if (!alert) {
    return <p>Select an alert</p>;
  }

  return (
    <div
      style={{
        background: "#0f172a",
        padding: "16px",
        borderRadius: "12px",
      }}
    >
      <h3>{alert.risk_level} Alert</h3>

      <p>
        <strong>Zone:</strong> {alert.location}
      </p>
      <p>
        <strong>Bin:</strong> {alert.bin_id}
      </p>
      <p>
        <strong>Time:</strong> {alert.time}
      </p>

      <hr />

      <p>Temperature: {alert.temperature}</p>
      <p>Humidity: {alert.humidity}</p>
      <p>Methane: {alert.methane}</p>
      <p>Ammonia: {alert.ammonia}</p>

      <hr />

      <p>
        <strong>Risk:</strong> {alert.odour_risk}
      </p>

      
    </div>
  );
}

export default AlertDetails;