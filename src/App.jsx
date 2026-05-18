function App() {
  return (
    <div style={{
      background: "#0f172a",
      minHeight: "100vh",
      color: "white",
      padding: "30px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{
        fontSize: "32px",
        marginBottom: "20px",
        color: "#38bdf8"
      }}>
        WCS FDA Tracker
      </h1>

      <div style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}>
        <h2>Vessel Details</h2>

        <p><strong>Vessel:</strong> MV Ocean Star</p>
        <p><strong>Cargo:</strong> Coal</p>
        <p><strong>Port:</strong> Richards Bay</p>
        <p><strong>Status:</strong> Loading</p>
      </div>

      <div style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <h2>FDA Status</h2>

        <p>✅ Documents Submitted</p>
        <p>✅ FDA Approved</p>
        <p>⏳ Awaiting Clearance</p>
      </div>

    </div>
  )
}

export default App