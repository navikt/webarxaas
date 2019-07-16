import React from 'react';

const SuppressionLimit = (props) => {
  const { suppressionLimit, setSuppressionLimit } = props;

  const content = (
    <div>
      <label htmlFor="limit">
                Limit:
        <input type="number" id="limit" min="0" max="1" step="0.001" />
      </label>
      <button type="button" className="btn btn-outline-primary" onClick={() => setSuppressionLimit(document.getElementById('limit').value)}>Add Suppression Limit</button>
      <br />
      Suppression Limit:
      {suppressionLimit}
      <br />
      <button type="button" className="btn btn-danger btn-sm" onClick={() => setSuppressionLimit(null)}>Remove</button>
    </div>
  );
  return content;
};
export default SuppressionLimit;
