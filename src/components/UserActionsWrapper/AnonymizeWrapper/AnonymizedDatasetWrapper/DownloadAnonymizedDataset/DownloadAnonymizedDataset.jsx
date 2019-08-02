import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import papaparse from 'papaparse';
import './__css__/DownloadAnonymizedDataset.css';

const DownloadAnonymizedDataset = (props) => {
  const { anonymizeResult, fileName } = props;

  const handleDownload = () => {
    const data = papaparse.unparse(anonymizeResult.data, { delimiter: ';' });
    const element = document.createElement('a');
    const csvData = new Blob([data], { type: 'text/plain' });
    element.href = URL.createObjectURL(csvData);
    element.download = fileName ? fileName.toString().replace('.csv', '').concat('_anonymized.csv') : 'export_anonymized.csv';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const content = (
    <div className="download-anonymized-dataset">
      <Knapp onClick={() => handleDownload()}>
        Download Dataset
      </Knapp>
    </div>
  );
  return content;
};
export default DownloadAnonymizedDataset;
