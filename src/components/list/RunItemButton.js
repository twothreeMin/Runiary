import './RunItemButton.css';

const RunItemButton = () => {
  const handlerClick = () => {
    console.log('click!!');
  };

  const handlerKeyUp = () => {
    console.log('keyup!!');
  };

  return (
    <div role="button" className="runItemButton" onClick={handlerClick} onKeyUp={handlerKeyUp} tabIndex={0}>
      <div className="plusButton">+</div>
    </div>
  );
};

export { RunItemButton };
