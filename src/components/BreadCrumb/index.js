import react from "react";
import { Link } from "react-router-dom";
// styles
import { Wrapper, Content } from "./BreadCrumb.style";

const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
