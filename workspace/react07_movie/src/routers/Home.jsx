import {Component} from "react";
import Movie from "../components/Movie.jsx";
import "../css/Home.css";
import axios from "axios";

class Home extends Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = () => {
        axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
            .then(res => {
                console.log("Axios res: ", res.data);
                console.log("Axios res: ", res.data.data.movie_count);
                console.log("Axios res: ", res.data.data.movies);
                this.setState({
                   isLoading: false,
                   movies: res.data.data.movies
                });
            })
    }
    // getMovies = () => {
    //     fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    //         .then(res => res.json())
    //         .catch(e => console.log(e))
    //         .then(res => {
    //             console.log(res.data.movies);
    //             console.log("movie count: ", res.data.movie_count);
    //             this.setState({
    //                 isLoading: false,
    //                 movies: res.data.movies
    //             });
    //         })
    // }

    componentDidMount() {
        console.log("Component did mount.");
        this.getMovies();
    }

    render() {
        let {isLoading, movies} = this.state
        return (
            <div className="movies">
                {
                    isLoading ? <div><span>Loading...</span></div> :
                        movies.map(movie => (
                            <Movie key={movie.id} movie={movie}/>
                        ))
                }
            </div>
        )
    }
}

export default Home;