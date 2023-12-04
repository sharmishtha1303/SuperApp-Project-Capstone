import List from "../Components/Movies/entertainmentList";
import Profile from "../assets/circleProfile.png";
import styles from "../Components/Movies/entertainmentList.module.css";
const entertainmentPage = () => {
  // To get values from localStorage
  const movies = JSON.parse(window.localStorage.getItem("GenreSelections"));

  return (
    <>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "black",
          overflowX: "hidden",
          maxHeight: "100vh",
        }}
      >
        <img
          src={Profile}                //small Profile
          style={{
            position: "absolute",
            top: "2vh",
            right: "3vw",
            height: "60px",
            width: "60px",
          }}
        />
        <p
          style={{                    //super app title
            color: "green",
            fontSize: "2rem",
            margin: "1vw",
            marginLeft: "90px"

          }}
          className={styles.header}    //header styles in css module
        >
          Super app
        </p>
        <p style={{ color: "white", fontSize: "25px", marginLeft: "6vw", marginTop: "-1vh" }}>
          Entertainment according to your choice
        </p>

        {movies.map((movie) => (
          <List GenreSelection={movie} />
        ))}
      </div>
    </>
  );
};

export default entertainmentPage;
