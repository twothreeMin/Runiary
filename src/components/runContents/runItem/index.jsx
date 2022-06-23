import React from 'react';
import PropTypes from 'prop-types';

import { RunItemCard } from './style';

export const RunItem = React.memo(({ runInfoList }) => {
  return runInfoList ? (
    <div className="runItems">
      <h3>{runInfoList.length}(개)의 기록이 있습니다.</h3>
      {runInfoList.map((runInfo) => {
        return (
          <RunItemCard key={runInfo.id}>
            <ul className="runItem__information">
              <li>{runInfo.date}</li>
              <li>{runInfo.distance}km</li>
              <li>{runInfo.time}</li>
              <li>{runInfo.pace}</li>
              <li>{runInfo.condition}</li>
            </ul>
          </RunItemCard>
        );
      })}
    </div>
  ) : (
    <div />
  );
});

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
