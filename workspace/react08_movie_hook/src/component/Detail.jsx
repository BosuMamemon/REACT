import {useLocation} from "react-router-dom";

function Detail() {
    // useLocation(): 현재 url에 있는 정보를 가져오는 놈
    let location = useLocation();
    let movie = location.state;
    console.log("location: ", {location});
    console.log("movie: ", {movie});
    return (
        <div>
            {movie.id} <br/>
            {movie.url} <br/>
            {movie.title} <br/>
            {movie.title_english} <br/>
            {movie.title_long} <br/>
            {movie.slug} <br/>
            {movie.year} <br/>
            {movie.rating} <br/>
            {movie.runtime} <br/>
            <ul>
                {movie.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>
            {movie.summary} <br/>
            {movie.description_full} <br/>
            {movie.synopsis} <br/>
            {movie.yt_trailer_code} <br/>
            {movie.language} <br/>
            {movie.mpa_rating} <br/>
            <img src={movie.background_image}/> <br/>
            <img src={movie.background_image_original}/> <br/>
            <img src={movie.small_cover_image}/> <br/>
            <img src={movie.medium_cover_image}/> <br/>
            <img src={movie.large_cover_image}/> <br/>
        </div>
    )
}

export default Detail;