import React, { useState } from 'react';
import './App.css';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { ToggleKnapp } from 'nav-frontend-toggle';
import AlertStripe from 'nav-frontend-alertstriper';
import RiskBullet from './components/RiskBullet';
import FileUpload from './components/fileUpload/fileUpload';


function App() {
  const [currentData, setData] = useState('');
  const [, setAttributes] = useState([]);

  return (
    <div className="App">
      <p>test</p>
      <FileUpload
        setAttributes={setAttributes}
        setData={setData}
        attributeTypeModel="QUASIIDENTIFYING"
      />
      <NavFrontendSpinner />
      <NavFrontendSpinner negativ />
      <ToggleKnapp onClick={() => console.log(currentData)}>
        Toggle
      </ToggleKnapp>
      <AlertStripe type="info">Søknaden din er klar for innsending.</AlertStripe>
      <AlertStripe type="suksess">Søknaden ble sendt!</AlertStripe>
      <AlertStripe type="advarsel">Vi opplever stor pågang! Innsendingen kan ta noe lengre tid.</AlertStripe>
      <AlertStripe type="feil">
        Innsending av søknad er nede, vennligst prøv igjen senere. Se
        {' '}
        <p>driftsmeldinger</p>
        {' '}
        for mer informasjon.
      </AlertStripe>
      <RiskBullet risk="25" />
    </div>
  );
}

export default App;
