import PropTypes from 'prop-types';

import { RunItemCard } from './style';

export const RunItem = ({ runInfoList }) => {
  console.log(runInfoList);
  return runInfoList ? (
    <div className="runItems">
      <h3>{runInfoList.length}(개)의 기록이 있습니다.</h3>
      {runInfoList.map((runInfo) => {
        return (
          <RunItemCard key={runInfo.id}>
            <ul className="runItem__information">
              <li className="information__date">{runInfo.date}</li>
              <li className="information__distance">{runInfo.distance}km</li>
              <li className="information__time">{runInfo.time}</li>
              <li className="information__pace">{runInfo.pace}</li>
              <li className="information__condition">{runInfo.condition}</li>
            </ul>
          </RunItemCard>
        );
      })}
    </div>
  ) : (
    <div />
  );
};

RunItem.propTypes = {
  runInfoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      date: PropTypes.string,
      distance: PropTypes.string,
      time: PropTypes.string,
      pace: PropTypes.string,
      condition: PropTypes.string,
      feeling: PropTypes.string,
    }),
  ).isRequired,
};
