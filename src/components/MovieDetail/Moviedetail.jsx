import { useParams } from "react-router-dom";
import "./MovieDetail.scss";
import { fetchAsyncMovieOrShow } from "../../features/movieSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovieOrShow } from "../../features/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();

  const dispatch = useDispatch();

  const { selectedMovieOrShow } = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShow(imdbID));
    return () => dispatch(removeSelectedMovieOrShow());
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{selectedMovieOrShow.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i> :{" "}
            {selectedMovieOrShow.imdbRating}
          </span>
          <span>
            IMDB votes <i className="fa fa-thumbs-up"></i> :{" "}
            {selectedMovieOrShow.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i> :{" "}
            {selectedMovieOrShow.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i> : {selectedMovieOrShow.Year}
          </span>
        </div>
        <div className="movie-plot">{selectedMovieOrShow.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director:</span>
            <span>{selectedMovieOrShow.Director}</span>
          </div>
          <div>
            <span>Stars:</span>
            <span>{selectedMovieOrShow.Actors}</span>
          </div>
          <div>
            <span>Generes:</span>
            <span>{selectedMovieOrShow.Genre}</span>
          </div>
          <div>
            <span>Language:</span>
            <span>{selectedMovieOrShow.Language}</span>
          </div>
          <div>
            <span>Awards:</span>
            <span>{selectedMovieOrShow.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={selectedMovieOrShow.Poster} alt={selectedMovieOrShow.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;
