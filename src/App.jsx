import React from 'react';
import './App.css';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { ToggleKnapp } from 'nav-frontend-toggle';
import AlertStripe from 'nav-frontend-alertstriper';


function App() {
  return (
    <div className="App">
      <p>test</p>
      <NavFrontendSpinner />
      <NavFrontendSpinner negativ />
      <ToggleKnapp>Toggle</ToggleKnapp>
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
    </div>
  );
}

export default App;
