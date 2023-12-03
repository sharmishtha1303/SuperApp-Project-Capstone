import Profile from "../../assets/Profile_One.png";
const InfoSection = () => {
  const info = JSON.parse(window.localStorage.getItem("userInfo"));
  const genre = JSON.parse(window.localStorage.getItem("GenreSelections"));
  return (
    <div
      style={{
        width: "33vw",
        Height: "5px",
        background: "#5746EA",
        borderRadius: "12px",
        padding: "6px",
        display: "flex",
        gap: "12px",
      }}
    >
      <div>
        <img
          src={Profile}
          style={{
            height: "25vh",
            width: "7vw",
            position: "relative",
            top: "2vh",
            marginLeft: "10px"
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", columnGap: "0px" }}>
        <p style={{ color: "white", fontSize: "18px", margin: "5px 40px", marginTop: "20px"}}>{info.name}</p>
        <p style={{ color: "white", fontSize: "18px", margin: "5px 40px", marginTop:"0px" }}>{info.email}</p>
        <p style={{ color: "white", fontSize: "3rem", margin: "5px 40px", marginTop: "-10px"}}>{info.username}</p>
        <Chips categories={genre} color={"#9F94FF"} />
      </div>
    </div>
  );
};

const Chips = ({ color, categories }) => {
  return (
    <div style={{ width: "20vw" }}>
      {categories.map((category) => (
        <button
          style={{
            background: `${color}`,
            borderRadius: "12px",
            width: "100px",
            color: "white",
            border: "none",
            padding: "6px",
            height: "30px",
            flexShrink: 0,
            margin: "5px",
            marginLeft: "45px"
          }}
        >
          {category}{" "}
          <span style={{ color: "black", marginLeft: "4px" }}>X</span>
        </button>
      ))}
    </div>
  );
};
export default InfoSection;