import React from 'react';
import handlePrivacyRemove from '../../../../../util/handlePrivacyRemove';

const PrivacyModelTable = (props) => {
  const { privacyModels, setPrivacyModels } = props;

  const content = (
    <div className="privacy-model-table">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Model</th>
            <th>Params</th>
            <th>Remove </th>
          </tr>
        </thead>
        <tbody>
          {privacyModels.map((model, index) => (
            <tr key={index.toString() + model.privacyModel.toString()}>
              <td>{model.privacyModel}</td>
              <td style={{ padding: 0 }}>
                <table>
                  <tbody>
                    {Object.entries(model.params).map(paramPair => (
                      <tr key={index.toString() + paramPair.toString()}>
                        <td>
                          {paramPair[0]}
                          {': '}
                        </td>
                        <td>{paramPair[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
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
