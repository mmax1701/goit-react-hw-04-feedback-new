export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {percentage}</p>
      </div>
    </>
  );
};
