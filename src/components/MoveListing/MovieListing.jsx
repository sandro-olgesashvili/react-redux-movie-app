import { useSelector } from "react-redux";
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.scss'


const MovieListing = () => {
    const {movies, shows} = useSelector(store => store.movies)

    console.log(movies)


    let renderMovies = '';

    renderMovies = movies.Response === 'True' ? (
        movies.Search.map((movie, index) => {
           return <MovieCard key={index} data = {movie} />
        })
    ): (
        <div className="movie-wrapper">
            <h3>{movies.Error}</h3>
        </div>
    )

    let rednerShows = ''

    rednerShows = shows.Response === 'True' ?(
        shows.Search.map((item, index) => {
            return <MovieCard key={index} data ={item} />
        })
    ) : (
        <div className="movie-wrapper">
            <h3>{shows.Error}</h3>
        </div>
    )


    return ( 
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">{renderMovies}</div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">{rednerShows}</div>
            </div>
        </div>
     );
}
 
export default MovieListing;