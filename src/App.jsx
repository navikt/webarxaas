import React, { useState } from 'react';
import './App.css';
import DatasetWrapper from './components/datasetWrapper/datasetWrapper';

function App() {
  const [currentData, setData] = useState('');
  const [, setAttributes] = useState([]);

  return (
    <div className="App">
      <DatasetWrapper
        setAttributes={setAttributes}
        setData={setData}
      />
    </div>
  );
}

export default App;
