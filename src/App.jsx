import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/fileUpload/fileUpload';

function App() {
  const [currentData, setData] = useState('');
  const [, setAttributes] = useState([]);

  return (
    <div className="App">
      <FileUpload
        setAttributes={setAttributes}
        setData={setData}
        attributeTypeModel="QUASIIDENTIFYING"
      />
    </div>
  );
}

export default App;
