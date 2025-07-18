import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserJob from "./pages/UserJob/UserJob";
import job from "./assets/job.png";
import notification from "./assets/notification.png";
import user from "./assets/user.png";

function App() {
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
        <Routes>
          <Route path="/" element={<UserJob />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
