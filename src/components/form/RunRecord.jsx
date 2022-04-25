const RunRecord = () => {
  return (
    <div>
      <div>
        <label htmlFor="condition">
          Today Condition
          <select id="condition">
            <option> 😆 </option>
            <option> 😀 </option>
            <option> 🙂 </option>
            <option> 😨 </option>
            <option> 🥵 </option>
            <option> No running </option>
          </select>
        </label>
      </div>
    </div>
  );
};

export { RunRecord };
