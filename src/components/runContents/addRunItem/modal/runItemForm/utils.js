export const getPace = (hour, min, sec, distance) => {
  console.log(hour, min, sec, distance);
  return (
    Math.round(
      ((Number(hour) * 60 + Number(min) + Number(sec) / 60) / distance +
        Number.EPSILON) *
        100,
    ) / 100
  ).toString();
};
