import React, { useState } from 'react';
import './App.css';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
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
      <div className="ReIdentificationRisk">
        <RiskBullet risk="25" />
        <div>
          <Ekspanderbartpanel tittel="More Information" border>
             TEST TEST TEST TEST
          </Ekspanderbartpanel>
        </div>
      </div>
    </div>
  );
}

export default App;
