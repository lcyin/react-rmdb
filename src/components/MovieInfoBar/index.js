import react from "react";
import PropTypes from "prop-types";
// helpers
import { calcTime, convertMoney } from "../../helpers";
// style
import { Warpper, Content } from "./MovieinfoBar.style";

const MovieinfoBar = ({ time, budget, revenue }) => (
  <Warpper>
    <Content>
      <div className="column">
        <p>Running Time: {calcTime(time)}</p>
      </div>
      <div className="column">
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>Revenue: {convertMoney(revenue)}</p>
      </div>
    </Content>
  </Warpper>
);

MovieinfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieinfoBar;
