import react, { useContext } from "react";
import PropTypes from "prop-types";
import API from "../../API";
import { useParams } from "react-router-dom";
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// components
import Thumb from "../Thumb";
// image
import NoImage from "../../images/no_image.jpg";
// style
import { Wrapper, Content, Text } from "./MovieInfo.style";
import { Context } from "../../context";
import Rate from "../Rate";

const MovieInfo = ({ movie }) => {
  const [user] = useContext(Context);
  const handleRating = async (value) => {
    const rate = await API.rateMovie(user.sessionId, movie.id, value);
  };
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="movie-thumb"
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          {user && (
            <div>
              <p>Rate Movie</p>
              <Rate callback={handleRating} />
            </div>
          )}
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object, // shape() for advance configuration
};

export default MovieInfo;
