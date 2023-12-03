import Info from "../Components/Browsing/InfoSection";
import NewsSection from "../Components/Browsing/NewsSection"
import WeatherSection from "../Components/Browsing/WeatherSection"
import { useNavigate } from "react-router-dom";
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
          <Info />
        </div>
        <div>
          <NewsSection />
        </div>
        <div>
          <WeatherSection/>
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
        Next Page
      </button>
    </div>
  );
};

export default Browse;
