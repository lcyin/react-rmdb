import react, { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // fetch movies function
  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      // set movie to state
      setState((prev) => ({
        ...movies,
        // add new state to old state
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial and search
  useEffect(
    () => {
      if (!searchTerm) {
        const sessionState = isPersistedState("homeState");

        if (sessionState) {
          setState(sessionState);
          return;
        }
      }

      // wipe out old state and search movies
      setState(initialState);
      fetchMovies(1, searchTerm);
    },
    // specify it as an empty array, it will run just once when component mount.
    // only trigger when component mount and searchTerm change
    [searchTerm]
  );

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;
    // load next page
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  // write to session storage
  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  };
};
