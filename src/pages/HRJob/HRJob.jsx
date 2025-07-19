import company from "../../assets/company.png";
import location from "../../assets/location.png";
import time from "../../assets/time.png";
import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HRJob() {
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Average Percentage",
      dataIndex: "average_percentage",
      key: "average_percentage",
    },
    {
      title: "Technical Percentage",
      dataIndex: "percentage_technical",
      key: "percentage_technical",
    },
    {
      title: "Technical Reason",
      dataIndex: "reason_technical",
      key: "reason_technical",
    },
    {
      title: "Personality Percentage",
      dataIndex: "percentage_personality",
      key: "percentage_personality",
    },
    {
      title: "Personality Reason",
      dataIndex: "reason_personality",
      key: "reason_personality",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://hrai-be.onrender.com/applicants"
        );
        console.log(response);
        setDataSource(response.data);
      } catch (error) {
        console.error("Error getting file :", error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="px-32 py-5 flex flex-col gap-4">
      {/* Company Profile */}
      <div className="flex flex-row p-4 justify-between items-center bg-white rounded-lg">
        <div className="flex flex-row gap-4 items-center">
          <p
            className="font-bold text-3xl p-8 rounded-md"
            style={{ color: "white", backgroundColor: "#2563EB" }}
          >
            TC
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Senior Frontend Developer</h2>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row gap-1 items-center">
                <img className="w-4" src={company} alt="company-logo" />
                <p className="text-md" style={{ color: "#6E7481" }}>
                  TechCorp Inc.,
                </p>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <img className="w-4" src={location} alt="company-logo" />
                <p className="text-md" style={{ color: "#6E7481" }}>
                  Jakarta, Indonesia
                </p>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <img className="w-4" src={time} alt="company-logo" />
                <p className="text-md" style={{ color: "#6E7481" }}>
                  Posted 2 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-end">
          <h2 className="text-2xl font-bold">127</h2>
          <p className="text-md" style={{ color: "#6E7481" }}>
            Total Applicants
          </p>
        </div>
      </div>
      {/* Company Profile */}

      {/* Search bar */}
      <div className="flex flex-col p-4 gap-4 bg-white rounded-lg">
        <p className="text-lg font-medium">Applicant List</p>
        <Table dataSource={dataSource} columns={columns} />
      </div>
      {/* Search bar */}
    </div>
  );
}
