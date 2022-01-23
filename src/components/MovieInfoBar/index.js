import react from "react";
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

export default MovieinfoBar;
