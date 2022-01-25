import react, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
// useState -> create control component
// useEffect -> trigger when local state change
// useRef -> useEffect always trigger in initial render, useRef to avoid useEffect in initial render
// image
import searchIcon from "../../images/search-icon.svg";
// style
import { Wrapper, Content } from "./SearchBar.style";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  callBack: PropTypes.func,
};

export default SearchBar;
