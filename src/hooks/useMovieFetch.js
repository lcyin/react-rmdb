import { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  // start to fetcing data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // fetch data only when component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        // Get director only
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoading(false);
      } catch (err) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(movieId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }
    fetchData();
  }, [movieId]);

  // write to session storage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  // alternative
  //   const fetchData = useCallback(async () => {
  //     try {
  //       setLoading(true);
  //       setError(false);

  //       const movie = await API.fetchMovie(movieId);
  //       const credits = await API.fetchCredits(movieId);
  //       // Get director only
  //       const directors = credits.crew.filter(
  //         (member) => member.job === "Director"
  //       );

  //       setState({
  //         ...movie,
  //         actors: credits.cast,
  //         directors,
  //       });

  //       setLoading(false);
  //     } catch (err) {
  //       setError(true);
  //     }
  //   }, [movieId]);
  //   useEffect(() => {
  //     fetchData();
  //   }, [movieId, fetchData]);

  return { state, loading, error };
};
