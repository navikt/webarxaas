import React from 'react';
import ImportDataset from './ImportManualImages/ImportDataset.png';
import DatasetPreview from './ImportManualImages/DatasetPreview.png';
import Attributes from './ImportManualImages/Attributes.png';
import ImportAndExportAttributes from './ImportManualImages/ImportAndExportAttributes.png';
import './__css__/ImportManual.css';

const ImportManual = () => {
  const content = (
    <div className="import-manual">
      <p>
        Info: Clicking the question mark in the web application
         will display the corresponding help text.
      </p>
      <p><b>Import data set:</b></p>
      <div className="import-dataset-img">
        <img src={ImportDataset} alt="Import Dataset img" />
      </div>
      <br />
      <p>Choose file or drag and drop the file to analyse.</p>
      <br />
      <p>
        Info: To display Æ, Ø, and Å, make sure the imported
         tabular dataset is saved as a CSV file with UTF-8.
      </p>
      <br />
      <p><b>Attributes:</b></p>
      <p>When a dataset is successfully uploaded a preview of the dataset is displayed.</p>
      <div className="dataset-preview">
        <img src={DatasetPreview} alt="Dataset Preview" />
      </div>
      <br />
      <p>Attributes will default to quasi-identifying</p>
      <p>To change attribute type, click the selector box and choose attribute type.</p>
      <div className="attributes">
        <img src={Attributes} alt="Attributes" />
      </div>
      <br />
      <p>There are four different attribute types to choose from:</p>
      <ul>
        <li>
          <b>Identifying</b>
          {' '}
          attributes are associated with a high risk of re-identification.
          <br />
          Typical examples are names or Social Security Numbers.
        </li>
        <li>
          <b>Quasi-identifying</b>
          {' '}
          attributes can in combination be used for re-identification attacks.
          <br />
          Typical examples are gender, date of birth and ZIP codes.
        </li>
        <li>
          <b>Sensitive</b>
          {' '}
          attributes encode properties with which individuals are not willing to be linked with.
          <br />
          As such, they might be of interest to an attacker and, if disclosed,
           could cause harm to data subjects.
          <br />
          They will be kept unmodified but may be subject to further constraints,
           such as t-closeness or l-diversity.
          <br />
          Typical examples are diagnoses.
        </li>
        <li>
          <b>Insensitive</b>
          {' '}
          attributes are not associated with privacy risks.
        </li>
      </ul>
      <br />
      <p><b>Import and export attributes (optional):</b></p>
      <div className="import-export-attributes">
        <img src={ImportAndExportAttributes} alt="Import And Export Attributes" />
      </div>
      <br />
      <ul>
        <li>
          <p>
            Click IMPORT ATTRIBUTE TYPES FROM JSON to import saved attribute
             configuration from JSON file.
          </p>
        </li>
        <li>
          <p>
            Click EXPORT ATTRIBUTE TYPES AS JSON to export attribute
             configuration as JSON file.
          </p>
          <br />
        </li>
      </ul>
    </div>
  );
  return content;
};

export default ImportManual;
