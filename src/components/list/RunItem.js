import './RunItem.css';

const RunItem = () => {
  return (
    <div className="RunItem">
      <div className="RunItem__information">
        <div className="information__date">
          2022.04.22
        </div>
        <div className="information__dis-time">
          4km / 23:11
        </div>
        <div className="information__pace">
          5:50
        </div>
        <div className="information__condition">
          😆
        </div>
      </div>
    </div>
  );
};

export { RunItem };
