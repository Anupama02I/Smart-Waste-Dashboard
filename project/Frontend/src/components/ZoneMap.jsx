function ZoneMap({ data, selectedZone, onZoneClick }) {
  // Get zones
  const zones = ["Zone A", "Zone B", "Zone C", "Zone D", "Zone E"];

  // Count bins per zone
  const getCount = (zone) => {
    const uniqueBins = new Set(
      data
        .filter((d) => d.location === zone)
        .map((d) => d.bin_id)
    );
    return uniqueBins.size;
  };

  // SVG positions (map-like layout)
  const layout = {
    "Zone A": { x: 80, y: 60 },
    "Zone B": { x: 260, y: 60 },
    "Zone C": { x: 440, y: 60 },
    "Zone D": { x: 160, y: 200 },
    "Zone E": { x: 360, y: 200 },
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#0f172a",
        borderRadius: "16px",
        padding: "10px",
        border: "1px solid #334155",
      }}
    >
      <svg viewBox="0 0 600 350" width="100%" height="300">
        {zones.map((zone) => {
          const pos = layout[zone];
          const count = getCount(zone);

          return (
            <g
              key={zone}
              onClick={() => onZoneClick(zone)}
              style={{ cursor: "pointer" }}
            >
              {/* Zone box */}
              <rect
                x={pos.x}
                y={pos.y}
                rx="16"
                ry="16"
                width="160"
                height="120"
                fill={
                  selectedZone === zone ? "#2563eb" : "#1e293b"
                }
                stroke={
                  selectedZone === zone ? "#60a5fa" : "#334155"
                }
                strokeWidth={selectedZone === zone ? 3 : 1}
              />

              {/* Zone name */}
              <text
                x={pos.x + 70}
                y={pos.y + 35}
                textAnchor="middle"
                fill="#e2e8f0"
                fontSize="24"
                fontWeight="600"
              >
                {zone}
              </text>

              {/* Bin count */}
              <text
                x={pos.x + 70}
                y={pos.y + 60}
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="18"
              >
                {count} bins
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default ZoneMap;