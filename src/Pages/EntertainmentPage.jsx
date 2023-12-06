import List from "../Components/Movies/entertainmentList";
import Profile from "../assets/circleProfile.png";
import styles from "../Components/Movies/entertainmentList.module.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const EntertainmentPage = () => {
  const movies = JSON.parse(window.localStorage.getItem("GenreSelections"));
  const navigate = useNavigate();

  // State to track the toggle state
  const [isCategoriesPage, setIsCategoriesPage] = useState(true);

  const handleClick = () => {
    // Toggle the state and navigate accordingly
    setIsCategoriesPage((prev) => !prev);
    navigate(isCategoriesPage ? "/SelectionPage" : "/EntertainmentPage");
  };

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
        {movies.map((movie, index) => (
          <List key={index} GenreSelection={movie} />
        ))}
        <button
          style={{
            background : "green",
            position: "relative ",
            bottom: "2vh",
            right: "3vw",
            border: "none",
            color: "white",
            marginTop: "5px",
            borderRadius: "12px",
            width: "120px",
            height: "32px",
            marginLeft: "1300px",
          }}
          onClick={handleClick}
        >
          {isCategoriesPage ? 'Categories' : 'Entertainment'}
        </button>
      </div>
    </>
  );
};

export default EntertainmentPage;
