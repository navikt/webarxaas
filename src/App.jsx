import React, { useState } from 'react';
import './App.css';
import DatasetWrapper from './components/datasetWrapper/datasetWrapper';

function App() {
  const [currentData, setData] = useState('');
  const [currentAttributes, setAttributes] = useState([]);

  return (
    <div className="App">
      <DatasetWrapper
        setAttributes={setAttributes}
        currentAttributes={currentAttributes}
        setData={setData}
        currentData={currentData}
      />
    </div>
  );
}

export default App;
