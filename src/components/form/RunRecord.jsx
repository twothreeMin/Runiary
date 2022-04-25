const RunRecord = () => {
  return (
    <form>
      <div className="RunDiaryForm__condition">
        <label htmlFor="condition">
          Today Condition
        </label>
        <select id="condition">
          <option> 😆 </option>
          <option> 😀 </option>
          <option> 🙂 </option>
          <option> 😨 </option>
          <option> 🥵 </option>
          <option> No running </option>
        </select>
      </div>
      <div className="RunDiaryForm__run-distance">
        <label htmlFor="run-distance">
          Distance
        </label>
        <input type="text" placeholder="Ex) 00:15:30" />
      </div>
      <div className="RunDiaryForm__run-time">
        <label htmlFor="run-time">
          Time
        </label>
        <input type="text" placeholder="Ex) 3km" />
      </div>
      <div className="RunDiaryForm__run-feeling">
        <label htmlFor="run-feeling">
          How are you feeling today?
        </label>
        <textarea name="feeling" id="" cols="30" rows="10" />
      </div>
    </form>
  );
};

export { RunRecord };
