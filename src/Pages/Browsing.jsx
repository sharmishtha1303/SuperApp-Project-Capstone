import Info from "../Components/Browsing/InfoSection";
import NewsSection from "../Components/Browsing/NewsSection"
import WeatherSection from "../Components/Browsing/WeatherSection"
import NoteSection from "../Components/Browsing/NoteSection"
import TimerSection from "../Components/Browsing/TimerSection"
import { useNavigate } from "react-router-dom";
import InfoSection from "../Components/Browsing/InfoSection";
const Browse = () => {
  const navigate = useNavigate();
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
      <div style={{ display: "flex", gap: "20px" }}>
      <div>
          <InfoSection />
          <WeatherSection />
        </div>
      <div>
        <NewsSection/>
      </div>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "2vh",
          right: "3vw",
          background: "green",
          border: "none",
          color: "white",
          padding: "6px",
          borderRadius: "12px",
        }}
        onClick={handleClick}
      >
        Brows
      </button>
    </div>
  );
};

export default Browse;
