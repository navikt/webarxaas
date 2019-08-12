export default function updateSuppressionLimit(newLimit, setSuppressionLimit) {
  const limit = parseInt(newLimit, 10) || 0;
  if (limit > 100) {
    setSuppressionLimit(100);
  } else if (limit < 0) {
    setSuppressionLimit(0);
  } else {
    setSuppressionLimit(limit);
  }
}
