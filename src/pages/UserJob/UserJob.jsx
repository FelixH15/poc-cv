import "./UserJob.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

import company from "../../assets/company.png";
import companyBlack from "../../assets/company-black.png";
import location from "../../assets/location.png";
import time from "../../assets/time.png";
import group from "../../assets/group.png";
import upload from "../../assets/upload.png";
import date from "../../assets/date.png";
import check from "../../assets/check.png";

export default function UserJob() {
  const fileInputRef = useRef(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data from n8n webhook...");
      try {
        const response = await axios.get(
          "https://hrai-be.onrender.com/applicants"
        );
        console.log(response);
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
        "http://webling.studio:5678/webhook/my-webhook",
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
    <div>
      {/* Breadcrumb */}
      <div
        className="px-32 py-3 bg-white"
        style={{ borderBottom: "1px solid #E5E7EB" }}
      >
        <p style={{ color: "#6E7481" }}>
          Dashboard {">"} Jobs {">"}{" "}
          <b style={{ color: "black" }}>Senior Frontend Developer</b>{" "}
        </p>
      </div>
      {/* Breadcrumb */}

      {/* Body */}
      <div
        style={{ backgroundColor: "#F9FAFB" }}
        className="px-32 py-10 flex flex-row gap-10"
      >
        <div className="w-2/3 flex flex-col gap-8 p-4 bg-white rounded-lg">
          <div className="flex flex-col gap-4">
            {/* Company Profile */}
            <div className="flex flex-row gap-4 items-center">
              <p
                className="font-bold text-3xl p-8 rounded-md"
                style={{ color: "white", backgroundColor: "#2563EB" }}
              >
                TC
              </p>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">
                  Senior Frontend Developer
                </h2>
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
            {/* Company Profile */}
            {/* Label Tag */}
            <div className="flex flex-row gap-3">
              <p
                style={{ backgroundColor: "#F3E8FF", color: "#6B21A8" }}
                className="rounded-3xl px-4 py-1 text-sm font-medium"
              >
                Full-time
              </p>
              <p
                style={{ backgroundColor: "#DCFCE7", color: "#166534" }}
                className="rounded-3xl px-4 py-1 text-sm font-medium"
              >
                Remote
              </p>
              <p
                style={{ backgroundColor: "#FFEDD5", color: "#EA580C" }}
                className="rounded-3xl px-4 py-1 text-sm font-medium"
              >
                Senior Level
              </p>
              <p
                style={{ backgroundColor: "#DBEAFE", color: "#1E40AF" }}
                className="rounded-3xl px-4 py-1 text-sm font-medium"
              >
                React
              </p>
            </div>
            {/* Label Tag */}
          </div>

          {/* Job Description */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Job Description</h3>
            <p className="font-normal text-sm">
              We are looking for a Senior Frontend Developer to join our dynamic
              team. You will be responsible for developing and maintaining
              high-quality web applications using modern frontend technologies.{" "}
              <br />
              As a Senior Frontend Developer, you will work closely with our
              design and backend teams to create exceptional user experiences.
              You'll be expected to mentor junior developers and contribute to
              architectural decisions.
            </p>
          </div>
          {/* Job Description */}

          {/* Key Responsibilities */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Key Responsibilities</h3>
            <ul className="list-disc pl-5 list-outside text-sm">
              <li>Develop and maintain frontend applications using React</li>
              <li>
                Collaborate with UI/UX designers to implement pixel-perfect
                designs
              </li>
              <li>Write clean, maintainable, and testable code</li>
              <li>Optimize applications for maximum speed and scalability</li>
              <li>Mentor junior developers and conduct code reviews</li>
            </ul>
          </div>
          {/* Key Responsibilities */}

          {/* Requirements */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Requirements</h3>
            <ul className="list-disc pl-5 list-outside text-sm">
              <li>5+ years of experience in frontend development</li>
              <li>Strong proficiency in React</li>
              <li>
                Experience with state management libraries (Redux, Zustand)
              </li>
              <li>
                Familiarity with testing frameworks (Jest, React Testing
                Library)
              </li>
              <li>Bachelor's degree in Computer Science or related field</li>
            </ul>
          </div>
          {/* Requirements */}
        </div>
        <div className="w-1/3 flex flex-col gap-7">
          {/* Apply Container */}
          <div className="flex flex-col gap-3 p-6 bg-white rounded-lg">
            <div
              className="flex flex-col gap-2 items-center pb-5"
              style={{ borderBottom: "1px solid #E9EAED" }}
            >
              <h2 className="text-3xl font-bold tracking-tight">
                $120,000 - $150,000
              </h2>
              <p
                className="text-sm font-bold tracking-tight"
                style={{ color: "#6E7481" }}
              >
                Annual Salary
              </p>
              <div className="flex flex-row gap-2 items-center">
                <img className="w-7" src={group} alt="group-icon" />
                <p
                  className="text-sm font-bold tracking-tight"
                  style={{ color: "#6E7481" }}
                >
                  127 Applicant
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-medium">Upload your CV</h2>
              <input
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="hidden"
              />
              <button
                className="py-3.5 rounded-lg text-white font-medium flex justify-center text-base items-center gap-2 cursor-pointer"
                onClick={() => fileInputRef.current.click()}
                style={{ backgroundColor: "#2563EB" }}
              >
                <img className="w-6" src={upload} alt="upload-icon" /> Upload
                Files
              </button>
              {message !== "" && (
                <div className="flex flex-row justify-center items-center gap-2">
                  <img className="w-5" src={check} alt="check-icon" />
                  <p className="text-sm text-green-600">{message}</p>
                </div>
              )}
            </div>
          </div>
          {/* Apply Container */}

          {/* About Company Container */}
          <div className="flex flex-col gap-3 p-6 bg-white rounded-lg">
            <div className="flex flex-col gap-3">
              <p className="text-xl font-medium">About TechCorp Inc.</p>
              {/* Field */}
              <div className="flex flex-row gap-4 items-center">
                <img className="h-4" src={companyBlack} alt="company-black" />
                <div className="flex flex-col">
                  <p className="text-base font-bold">Industry</p>
                  <p className="text-sm">Technology</p>
                </div>
              </div>
              {/* Field */}

              {/* Group */}
              <div className="flex flex-row gap-4 items-center">
                <img className="h-4" src={group} alt="company-black" />
                <div className="flex flex-col">
                  <p className="text-base font-bold">Company Size</p>
                  <p className="text-sm">500-1000</p>
                </div>
              </div>
              {/* Group */}

              {/* Date */}
              <div className="flex flex-row gap-4 items-center">
                <img className="h-4" src={date} alt="company-black" />
                <div className="flex flex-col">
                  <p className="text-base font-bold">Founded</p>
                  <p className="text-sm">2010</p>
                </div>
              </div>
              {/* Date */}

              <button
                className="py-3.5 rounded-lg text-white font-medium flex justify-center text-base items-center gap-2 cursor-pointer"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #2563EB",
                  color: "#2563EB",
                }}
              >
                View Company Profile
              </button>
            </div>
          </div>
          {/* About Company Container */}
        </div>
      </div>
      {/* Body */}
    </div>
  );
}
