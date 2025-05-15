import "../css/Movie.css";

import {Component} from "react";

class Movie extends Component {
    render() {
        let {year, title, summary, medium_cover_image, genres} = this.props.movie;

        return (
            <div className="movie">
                <img src={medium_cover_image} alt={title} title={title}/>
                <div>
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {
                            genres.map((genre, index) => (
                                <li key={index}>{genre}</li>
                            ))
                        }
                    </ul>
                </div>
                <p>{summary.slice(0, 100)}...</p>
            </div>
        )
    }
}

export default Movie;