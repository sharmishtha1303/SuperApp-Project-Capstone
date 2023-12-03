// Importing Styles and images for different GenreSelections
import Styles from "./GenreSelection.module.css";
import action from "../../assets/image2.png";
import drama from "../../assets/image3.png";
import romance from "../../assets/image4.png";
import thriller from "../../assets/image5.png";
import western from "../../assets/image6.png";
import horror from "../../assets/image7.png";
import fantasy from "../../assets/image8.png";
import music from "../../assets/image9.png";
import fiction from "../../assets/image10.png";
import warning from "../../assets/warning.png"
import Chips from "../../Global/Chips";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GenreSelections = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "150px", height: "90px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "150px", height: "90px" }} src={drama} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "150px", height: "90px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "150px", height: "90px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "150px", height: "90px" }} src={western} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "150px", height: "90px" }} src={horror} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "150px", height: "90px" }} src={fantasy} />,
  },


  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "150px", height: "90px" }} src={music} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "150px", height: "90px" }} src={fiction} />,
  },


];
const GenreSelection = () => {
  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);
  const navigate = useNavigate();
  const handlenextButton = () => {
    if (categories.length < 3) {
      setLengthError(true);
      return;
    } else {
      setLengthError(false);
      window.localStorage.setItem("GenreSelections", JSON.stringify([...categories]));
      navigate("/HomePage");
    }
  };

  return (
    <div className={Styles.body}>
      <div className={Styles.left}>
        <p className={Styles.heading}>Super app</p>
        <p className={Styles.subHeading}>Choose your entertainment category</p>
        <div style={{ marginTop: "10vh" }}>
          <Chips
            categories={categories}
            color={"green"}
            setCategories={setCategories}
          />
          {lengthError ? (
            <p className={Styles.error}><img src={warning} alt="Warning Icon" style={{ width: "20px", height: "20px", marginRight: "5px" }} />Minimum 3 category required</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={Styles.right}>
        {GenreSelections.map((data, idx) => (
          <Block
            data={data}
            idx={idx}
            categories={categories}
            setCategories={setCategories}
          />
        ))}
      </div>
      {location.pathname === "/GenreSelection" && (
      <button className={Styles.nextButton} onClick={handlenextButton}>
        Next Page
      </button>
      )}
    </div>
  );
};

// Component for rendering a GenreSelection block
const Block = ({ data, idx, setCategories, categories }) => {
  // State to manage whether the block is selected
  const [selected, setSelected] = useState();

  // Function to handle block click and update selected categories
  const handleClick = (e) => {
    if (categories.includes(data.id)) {
      const index = categories.indexOf(data.id);
      categories.splice(index, 1);
      setCategories([...categories]);
    } else {
      setCategories([...categories, data.id]);
    }
    setSelected(!selected);
  };
  // Effect to set the selected state based on whether the category is in the selected list
  useEffect(() => {
    setSelected(categories.includes(data.id) == true);
  });
  // Render the GenreSelection block
  return (
    <div
      data={data}
      onClick={(e) => handleClick(e)}
      key={idx}
      style={{
        // Styling for the GenreSelection block including background color, border, and margin
        background: data["color"],
        color: "white",
        padding: "11px",
        borderRadius: "12px",
        display: "flex",          
        flexDirection: "column",  
        alignItems: "flex-start",
        border: `${selected ? "4px solid green" : "4px solid transparent"}`,
        marginBottom: "10px"
      }}
    >
      {/* Display GenreSelection name and image inside the block */}
      <p style={{ margin: "0 0 20px", fontSize: "22px", fontFamily: "DM Sans"}}>{data.id}</p>
      {data.image}
    </div>
  );
};
export default GenreSelection;
