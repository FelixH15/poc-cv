import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import job from "./assets/job.png";
import notification from "./assets/notification.png";
import user from "./assets/user.png";
import { Suspense, lazy } from "react";

function App() {
  const UserJob = lazy(() => import("./pages/UserJob/UserJob"));
  const HRJob = lazy(() => import("./pages/HRJob/HRJob"));
  return (
    <div style={{ backgroundColor: "#F9FAFB" }} className="h-screen">
      {/* Headers */}
      <header
        className="px-32 py-5 flex flex-row justify-between items-center bg-white"
        style={{ borderBottom: "1px solid #E5E7EB" }}
      >
        <div className="flex flex-row gap-4">
          <img className="w-8" src={job} alt="job-icon" />
          <p className="text-xl font-bold">JobPortal</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <img className="w-5" src={notification} alt="notif-icon" />
          <img className="w-8 h-8" src={user} alt="user-icon" />
          <p className="text-lg font-medium">Sony Williams</p>
        </div>
      </header>
      {/* Headers */}
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">Loading...</div>
          }
        >
          <Routes>
            <Route path="/" element={<UserJob />} />
            <Route path="/userJob" element={<UserJob />} />
            <Route path="/hrJob" element={<HRJob />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
