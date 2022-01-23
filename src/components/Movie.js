import react from "react";
import { useParams } from "react-router-dom";
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieinfoBar from "./MovieInfoBar";
import Actor from "./Actor";

// hook
import { useMovieFetch } from "../hooks/useMovieFetch";
// image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  // Get movieId from params
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieinfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            name={actor.name}
            character={actor.character}
            key={actor.creadit_id}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
