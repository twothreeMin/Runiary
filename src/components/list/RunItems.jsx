import PropTypes from 'prop-types';
import styled from 'styled-components';

const RunItemsStyled = styled.div`
  & {
    margin-top: 15px;
    background-color: #e4fffa;
  }

  &:hover {
    border: 1px solid #89f7e2;
    background: #89f7e2;
    box-shadow: -3px -3px #abffee;
  }

  .runItem__information {
    padding: 20px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .information__condition {
    font-size: 20px;
  }
`;

export const RunItems = ({ runInfoList }) => {
  return (
    <div className="runItems">
      <h3>{runInfoList.length}(개)의 기록이 있습니다.</h3>
      {runInfoList.map((runInfo) => {
        console.log(runInfo);
        return (
          <RunItemsStyled key={runInfo.id}>
            <div className="runItem__information">
              <div className="information__date">{runInfo.date}</div>
              <div className="information__distance">{runInfo.distance}km</div>
              <div className="information__time">{runInfo.time}</div>
              <div className="information__pace">{runInfo.pace}</div>
              <div className="information__condition">{runInfo.condition}</div>
            </div>
          </RunItemsStyled>
        );
      })}
    </div>
  );
};

RunItems.propTypes = {
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
