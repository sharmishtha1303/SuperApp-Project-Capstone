import Info from "../Components/Browsing/InfoSection";
import NewsSection from "../Components/Browsing/NewsSection";
import WeatherSection from "../Components/Browsing/WeatherSection";
import NoteSection from "../Components/Browsing/NoteSection";
import TimerSection from "../Components/Browsing/TimerSection";
import { useNavigate } from "react-router-dom";
import InfoSection from "../Components/Browsing/InfoSection";

const Browse = () => {
  const navigate = useNavigate();

  // Function to handle button click and navigate to the "/movies" route
  const handleClick = () => {
    navigate("/movies");
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        paddingLeft: "3vw",
        paddingTop: "3vh",
        boxSizing: "border-box",
      }}
    >
      {/* Main content area with flex layout */}
      <div style={{ display: "flex", gap: "30px", paddingTop: "15px"}}>
        {/* Left section with Info and Weather components */}
        <div>
          <InfoSection />
          <WeatherSection />
          <TimerSection />
        </div>

        {/* Middle section with NoteSection component */}
        <div>
          <NoteSection />
        </div>

        {/* Right section with NewsSection component */}
        <div>
          <NewsSection />
        </div>
      </div>

      {/* Button to navigate to the "/movies" route */}
      <button
        style={{
          position: "absolute",
          bottom: "2vh",
          right: "3vw",
          background: "green",
          border: "none",
          color: "white",
          padding: "px",
          borderRadius: "12px",
          width: "120px",
          height: "32px",
        }}
        onClick={handleClick}
      >
        Brows
      </button>
    </div>
  );
};

export default Browse;
