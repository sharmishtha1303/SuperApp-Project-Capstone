import { useEffect, useState } from "react";

const NewsSection = () => {
  // State to store news data
  const [news, setNews] = useState("");

  // State to store current date and time
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(news);

  // Fetch news data from the News API on component mount
  useEffect(() => {
    const receiveNews = async () => {
      try {
        const response = await fetch(
          "https://api.currentsapi.services/v1/latest-news?language=en&apiKey=295xwXV8Qxnpe972HwkIVosRTk2RlPoCUL3MkEwT2rDxmGGQ"
        );
        const data = await response.json();
        setNews(data.news && data.news.length > 0 ? data.news[0] : null);
      } catch (error) {
        console.error("Error fetching news data:", error);
      } finally {
        setLoading(false);
      }
    };
    receiveNews();
  }, []);

  // Update time using useEffect
  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
  });

  // Update date using useEffect
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "-" + mm + "-" + yyyy;
    setDate(formattedToday);
  });

  return (
    <div
      style={{
        height: "90vh",
        width: "40vw",
        position: "relative",
        borderRadius: "12px",
        padding: "6px",
        marginLeft: "0px",
      }}
    >
      {/* Display news image */}
      <img
        src={news.image}
        style={{ height: "60vh", borderRadius: "12px", width: "28vw" }}
      />
      {/* Display news description */}
      <div
        style={{
          height: "24vh",
          borderRadius: "12px",
          width: "27vw",
          background: "white",
          fontSize: "1.5rem",
          padding: "6px",
        }}
      >
        {news.description}
      </div>
      {/* Display detailed news information with title, date, and time */}
      <div
        style={{
          position: "absolute",
          width: "28vw",
          height: "30vh",
          background: "rgba(0, 0, 0, 0.74)",
          top: "31vh",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <p style={{ color: "white", fontSize: "1.5rem", marginBottom: "10px" }}>
          {news.title}
        </p>
        <span
          style={{ color: "white", fontSize: "1.3rem", marginRight: "10px" }}
        >
          {date}
        </span>
        <span
          style={{ color: "white", fontSize: "1.3rem", marginRight: "10px" }}
        >
          {time}
        </span>
      </div>
    </div>
  );
};

export default NewsSection;
