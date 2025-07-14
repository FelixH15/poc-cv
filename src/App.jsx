import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [table, setTable] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data from n8n webhook...");
      try {
        const response = await axios.get(
          "https://hrai-be.onrender.com/applicants"
        );
        console.log(response);
        setTable(response.data);
      } catch (error) {
        console.error("Error getting file :", error);
      }
    }

    fetchData();
  }, []);

  async function handleFileChange(event) {
    console.log("File selected:", event.target.files[0]);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("data", file); // 'data' should match n8n's Binary Property Name
    formData.append("fileName", event.target.files[0].name); // 'data' should match n8n's Binary Property Name

    try {
      const response = await axios.post(
        "https://felix1503.app.n8n.cloud/webhook-test/my-webhook",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "60px 250px",
      }}
    >
      <div className="card">
        <input type="file" onChange={handleFileChange} />
        {message !== "" && <p>{message}</p>}
      </div>

      <table
        style={{
          width: "100%",
          border: "1px solid white",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr className="table-row">
            <th>userID</th>
            <th>% Technincal</th>
            <th>Technical Reason</th>
            <th>% Personality</th>
            <th>Personality Reason</th>
            <th>Average %</th>
          </tr>
        </thead>
        <tbody style={{ border: "1px solid white" }}>
          {table.map((row) => (
            <tr className="table-row" key={row.user_id}>
              <td className="w-1/6">{row.name}</td>
              <td className="w-1/6">{row.percentage_technical + "%"}</td>
              <td className="w-1/6">{row.reason_technical}</td>
              <td className="w-1/6">{row.percentage_personality + "%"}</td>
              <td className="w-1/6">{row.reason_personality}</td>
              <td className="w-1/6">{row.average_percentage + "%"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
