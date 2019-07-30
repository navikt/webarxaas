import React, { useState } from 'react';
import handlePrivacyAdd from '../../../../util/handlePrivacyAdd';

const PrivacyModelManager = (props) => {
  const { privacyModels, setPrivacyModels } = props;
  const [selectedPrivacyModel, setSelectedPrivacyModel] = useState('KANONYMITY');
  const [param, setParam] = useState('');

  const kanonymity = (
    <div>
      <label htmlFor="K">
        K:
        <input id="K" type="number" className="form-control" min="2" max="1000" required onChange={e => setParam({ k: e.target.value })} />
      </label>
    </div>
  );

  const [paramForm, setParamForm] = useState(kanonymity);

  const ldiversity = (
    <div>
      <label htmlFor="L">
        L:
        <input type="number" min="2" max="1000" id="L" onChange={e => setParam({ l: e.target.value, field: document.getElementById('column_name').value })} />
      </label>
      <label htmlFor="column_name">
        Field:
        <input type="text" id="column_name" onChange={e => setParam({ l: document.getElementById('L').value, field: e.target.value })} />
      </label>
    </div>
  );
  const tcloseness = (
    <div>
      <label htmlFor="T">
        T:
        <input type="number" min="0.000001" max="1" step="0.000001" id="T" onChange={e => setParam({ t: e.target.value, field: document.getElementById('column_name').value })} />
      </label>
      <label htmlFor="column_name">
        Field:
        <input type="text" id="column_name" onChange={e => setParam({ t: document.getElementById('T').value, field: e.target.value })} />
      </label>
    </div>
  );
  const ldiversityRecursive = (
    <div>
      <label htmlFor="L">
        L:
        <input type="number" min="2" max="1000" id="L" onChange={e => setParam({ l: e.target.value, field: document.getElementById('column_name').value, C: document.getElementById('C').value })} />
      </label>
      <label htmlFor="column_name">
        Field:
        <input type="text" id="column_name" onChange={e => setParam({ l: document.getElementById('L').value, field: e.target.value, C: document.getElementById('C').value })} />
      </label>
      <label htmlFor="C">
        C:
        <input type="number" min="0.00001" max="1000" step="0.00001" id="C" onChange={e => setParam({ l: document.getElementById('L').value, field: document.getElementById('column_name').value, c: e.target.value })} />
      </label>
    </div>
  );


  const updateForm = (form) => {
    if (form === 'KANONYMITY') {
      setParamForm(kanonymity);
    } else if (form === 'LDIVERSITY_DISTINCT' || form === 'LDIVERSITY_GRASSBERGERENTROPY' || form === 'LDIVERSITY_SHANNONENTROPY') {
      setParamForm(ldiversity);
    } else if (form === 'TCLOSENESS_ORDERED_DISTANCE' || form === 'TCLOSENESS_EQUAL_DISTANCE') {
      setParamForm(tcloseness);
    } else if (form === 'LDIVERSITY_RECURSIVE') {
      setParamForm(ldiversityRecursive);
    } else {
      setParamForm(<div>No known form selected</div>);
    }
  };

  const content = (
    <div>
      <select
        className="form-control"
        onChange={(e) => {
          setSelectedPrivacyModel(e.target.value);
          updateForm(e.target.value);
        }
        }
      >
        <option defaultValue value="KANONYMITY">K-Anonymity</option>
        <option value="LDIVERSITY_DISTINCT">L-Diversity-Distinct</option>
        <option value="LDIVERSITY_GRASSBERGERENTROPY">L-Diversity-Grassberger-Entropy</option>
        <option value="LDIVERSITY_SHANNONENTROPY">L-Diversity-Shannon-Entropy</option>
        <option value="LDIVERSITY_RECURSIVE">L-Diversity-Recursive</option>
        <option value="TCLOSENESS_ORDERED_DISTANCE">T-Closeness Ordered Distance</option>
        <option value="TCLOSENESS_EQUAL_DISTANCE">T-Closeness Equal Distance</option>
      </select>
      {paramForm}
      <button
        className="btn btn-outline-primary"
        type="button"
        disabled={!param}
        onClick={() => {
          handlePrivacyAdd(
            {
              privacyModel: selectedPrivacyModel,
              params: param,
            },
            privacyModels,
            setPrivacyModels,
          );
          setParam('');
        }}
      >
        Add Privacy Model
      </button>
    </div>
  );
  return content;
};

export default PrivacyModelManager;
