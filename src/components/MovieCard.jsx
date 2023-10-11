const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import PropTypes from "prop-types";

MovieCard.propTypes = {
  movie: PropTypes.object,
};

function MovieCard({ movie }) {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[110px] md:w-[200px]  rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-100 transition-all duration-100 ease-in"/>
    </>
  );
}

export default MovieCard;
