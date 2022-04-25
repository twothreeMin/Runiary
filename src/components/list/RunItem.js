import './RunItem.css';

const RunItem = () => {
  return (
    <div className="RunItem">
      <div className="RunItem__date">
        2022.04.22
      </div>
      <div className="RunItem__dis-time">
        4km / 23:11
      </div>
      <div className="RunItem__pace">
        5:50
      </div>
      <div className="RunItem__condition">
        😆
      </div>
    </div>
  );
};

export { RunItem };
