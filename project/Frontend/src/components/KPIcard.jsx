function KPIcard({ title, value }) {
  return (
    <div style={{
      background: "#1e293b",
      padding: "20px",
      borderRadius: "12px",
      width: "200px",
      color: "white",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
    }}>
      <h3 style={{ marginBottom: "10px", color: "#94a3b8" }}>
        {title}
      </h3>
      <h2 style={{ fontSize: "26px" }}>{value}</h2>
    </div>
  );
}

export default KPIcard;