import React, { useState } from 'react';
import './App.css';
import DatasetWrapper from './components/datasetWrapper/datasetWrapper';
import RiskBullet from './components/RiskBullet/RiskBullet';

function App() {
  const [dataset, setDataset] = useState('');
  const [attributes, setAttributes] = useState([]);

  return (
    <div className="App">
      <DatasetWrapper
        setAttributes={setAttributes}
        attributes={attributes}
        setDataset={setDataset}
        dataset={dataset}
      />
      <RiskBullet risk="25" />
    </div>
  );
}

export default App;
