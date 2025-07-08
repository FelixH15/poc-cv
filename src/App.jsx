import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>CV POC</h1>
      <div className="card">
        <input type="file" onChange={handleFileChange} />
      </div>
    </div>
  );
}

export default App;
