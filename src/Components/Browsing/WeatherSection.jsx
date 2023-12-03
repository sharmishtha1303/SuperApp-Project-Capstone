import { useEffect, useState } from "react";
import pressure from "../../assets/pressure.png";
import wind from "../../assets/Wind.png";
import humidity from "../../assets/Humidity.png";
import divider from "../../assets/Divider.png";

const WeatherCondition = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState(false);

  // Fetch weather data from the API on component mount
  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(
        "http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=London&aqi=no"
      )
        .then(async (data) => await data.json())
        .then((data) => setWeather(data));
    };
    fetchWeather();
  }, []);

  // Update time and date using useEffect
  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
  });

  useEffect(() => {
    // Update date in DD-MM-YYYY format
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
        font: "Roboto",
        width: "34vw",
        minHeight: "22vh",
        background: "#101744",
        borderRadius: "12px",
        marginTop: "30px",
      }}
    >
      {/* Date and time display */}
      <div
        style={{
          font : "Roboto",
          height: "7vh",
          background: "#FF4ADE",
          borderRadius: "12px",
          color: "white",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        <span>{date}</span>
        <span>{time}</span>
      </div>
      
      {/* Weather condition display */}
      <div>
        {weather ? (
          <div
            style={{
              display: "flex",
              color: "white",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              {/* Weather icon and text */}
              <img
                src={weather.current.condition.icon}
                style={{ width: "50px", height: "50px" }}
              />
              <p>{weather.current.condition.text}</p>
            </div>
            {/* Divider image */}
            <img src={divider} />
            <div>
              {/* Temperature display */}
              <p
                style={{
                  marginBottom: "12px",
                  fontSize: "24px",
                }}
              >
                <span style={{ marginLeft: "17px" }}>{weather.current.temp_c}</span>°C
              </p>
              {/* Pressure icon and value */}
              <img
                src={pressure}
                style={{
                  position: "absolute",
                  marginTop: "10px",
                }}
              />
              <p style={{ marginLeft: "15px" }}>{weather.current.pressure_mb} mbar <br />pressure</p>
            </div>
            {/* Divider image */}
            <img src={divider} />
            <div>
              {/* Wind icon, speed, and Humidity icon */}
              <img
                src={wind}
                style={{
                  position: "absolute",
                  height: "23px",
                  marginTop: "16px",
                  marginRight: "10px",
                }}
              />
              <p
                style={{
                  marginBottom: "12px",
                  marginTop: "10px",
                  marginLeft: "35px",
                }}
              >
                {weather.current.wind_kph} km/hr <br />wind
              </p>
              <img
                src={humidity}
                style={{
                  height: "23px",
                  position: "absolute",
                  marginTop: "10px",
                }}
              />
              <p style={{ marginLeft: "32px", marginTop: "15px" }}>{weather.current.humidity}% <br />humidity</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default WeatherCondition;
