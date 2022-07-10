import React, { useContext } from 'react';
import { RunItem } from './style';
import { RunDataContext } from '../../../store/rundata-context';

export const RunItemList = React.memo(() => {
  const { runData } = useContext(RunDataContext);

  return runData ? (
    <div className="runItems">
      <h3>{runData.length}(개)의 기록이 있습니다.</h3>
      {runData.map((runInfo) => (
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
  );
});
