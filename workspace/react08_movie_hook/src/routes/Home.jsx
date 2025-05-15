import "../css/Home.css";

import {useEffect, useState} from "react";
import axios from "axios";
import Movie from "../component/Movie.jsx";

function Home() {
    let [isLoading, setLoading] = useState(true);
    let [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies();
    }, []);

    let getMovies = () => {
        axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
            .then(res => {
                setLoading(false);
                setMovies(res.data.data.movies);
            })
    }

    return (
        <div className="movies">
            {
                isLoading ? <div className="loader">Loading...</div> :
                    movies.map(movie => (
                        <Movie key={movie.id} movie={movie}/>
                    ))
            }
        </div>
    )
}

export default Home;