import react from "react";
import PropTypes from "prop-types";

// styles
import { Wrapper } from "./Button.style";

const Button = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  test: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
