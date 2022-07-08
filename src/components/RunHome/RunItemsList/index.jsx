import React from 'react';
import PropTypes from 'prop-types';

import { RunItem } from './style';

export const RunItemList = React.memo(({ runInfoList }) =>
  runInfoList ? (
    <div className="runItems">
      <h3>{runInfoList.length}(개)의 기록이 있습니다.</h3>
      {runInfoList.map((runInfo) => (
        <RunItem key={runInfo.id}>
          <ul className="runItem__information">
            <li>{runInfo.date}</li>
            <li>{runInfo.distance}km</li>
            <li>
              {runInfo.runTime.hour}:{runInfo.runTime.min}:{runInfo.runTime.sec}
            </li>
            <li>{runInfo.pace}</li>
            <li>{runInfo.condition}</li>
          </ul>
        </RunItem>
      ))}
    </div>
  ) : (
    <div />
  ),
);

RunItemList.propTypes = {
  runInfoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      date: PropTypes.string,
      distance: PropTypes.string,
      runTime: PropTypes.object,
      pace: PropTypes.string,
      condition: PropTypes.string,
      anything: PropTypes.string,
    }),
  ).isRequired,
};
