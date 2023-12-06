    import { useEffect, useState } from "react";
    import styles from "./entertainmentList.module.css";
    const List = ({ GenreSelection }) => {

    // State to store the list of movies
    const [movies, setMovies] = useState([]);
    console.log(movies);

    // Effect to fetch movies based on the selected genre when the component mounts
    useEffect(() => {
        const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
            "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
        };

        // Function to fetch movies based on the selected genre
        const fetchMovies = async () => {
        await fetch(
            `https://moviesdatabase.p.rapidapi.com/titles?genre=${GenreSelection}&year=2020`,
            options
        )

            // Parse the JSON response and set the movies state
            .then((response) => response.json())
            .then((response) => setMovies(response.results.splice(4, 4)))
            .catch((err) => console.error(err));
        };
        // Call the fetchMovies function
        fetchMovies();
    }, []);
    return (
        <>
        <p className={styles.heading} style={{ }}>
            {GenreSelection}
        </p>
        <div style={{ display: "flex", marginLeft: "3vw", marginTop: "-35px" }}>
            {movies.map((movie, idx) => {
            return (
                <div key={idx} style={{ width: "20vw", margin: "1vw"}}>
                <img
                    src={movie?.primaryImage?.url}
                    style={{
                    objectFit: "cover",
                    width: "18vw",
                    height: "18vh",
                    borderRadius: "12px",
                    marginLeft: "4vh"
                    }}
                />
                </div>
            );
            })}
        </div>
        </>
    );
    };

    export default List;
