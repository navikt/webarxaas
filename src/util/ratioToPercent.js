export default function toPercent(ratio) {
  const percent = 100;
  const percentString = ' %';
  return (ratio * percent).toFixed(2) + percentString;
}
