/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

import './RunItem.css';

const RunItem = ({ runInfoList }) => {
  console.log(runInfoList);
  return (
    <div>
      <h3>{runInfoList.length}(개)의 기록이 있습니다.</h3>
      {runInfoList.map((runInfo) => {
        return (
          <div className="RunItem">
            <div className="RunItem__information">
              <div className="information__date">
                {runInfo.date}
              </div>
              <div className="information__dis-time">
                {runInfo.distance}
                {runInfo.time}
              </div>
              <div className="information__pace">
                {runInfo.pace}
              </div>
              <div className="information__condition">
                {runInfo.condition}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

RunItem.propTypes = {
  runInfoList: PropTypes.array.isRequired,
  // 위에 있는 것 모두 `isRequired`와 연결하여 prop가 제공되지 않았을 때 경고가 보이도록 할 수 있습니다.
  // react/require-default-props
  // date: PropTypes.string.isRequired,
  // distance: PropTypes.number.isRequired,
  // time: PropTypes.string.isRequired,
  // pace: PropTypes.string.isRequired,
  // condition: PropTypes.string.isRequired,
};

export { RunItem };
