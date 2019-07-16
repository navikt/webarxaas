import React from 'react';
import handlePrivacyRemove from '../../../../util/handlePrivacyRemove';

const PrivacyModelTable = (props) => {
  const { privacyModels, setPrivacyModels } = props;

  const content = (
    <div className="privacy-model-table">
      <table border="1">
        <thead>
          <tr>
            <th>Model</th>
            <th>Params</th>
          </tr>
        </thead>
        <tbody>
          {privacyModels.map((model, index) => (
            <tr key={model}>
              <td>{model.privacyModel}</td>
              <td>{JSON.stringify(model.params)}</td>
              <td>
                <button type="button" className="btn btn-danger btn-sm" onClick={() => handlePrivacyRemove(index, privacyModels, setPrivacyModels)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  return content;
};
export default PrivacyModelTable;
