import React from 'react';
import './__css__/AnonymizeManual.css';
import ImportManual from '../ImportManual/ImportManual';
import ResultManual from '../ResultManual/ResultManual';
import AttributeGeneralizationLevelPanel from './AnonymizeManualImages/AttributeGeneralizationLevelPanel.png';
import AttributeGeneralizationLevelMetrics from './AnonymizeManualImages/AttributeGeneralizationLevelMetrics.png';
import AnonymizeDatasetTab from './AnonymizeManualImages/AnonymizeDatasetTab.png';
import AnonymizeDatasetFields from './AnonymizeManualImages/AnonymizeDatasetFields.png';
import ImportHierarchies from './AnonymizeManualImages/ImportHierarchies.png';
import SetPrivacyModels from './AnonymizeManualImages/SetPrivacyModels.png';
import PrivacyModels from '../PrivacyModels/PrivacyModels';
import KanonymityInputField from './AnonymizeManualImages/KanonymityInputField.png';
import DropdownPrivacyModels from './AnonymizeManualImages/DropdownPrivacyModels.png';
import PrivacyModelInputFields from './AnonymizeManualImages/PrivacyModelInputFields.png';
import SetSuppressionLimit from './AnonymizeManualImages/SetSuppressionLimit.png';
import AnonymizeDatasetButton from './AnonymizeManualImages/AnonymizeDatasetButton.png';
import AnonymizationResultPreview from './AnonymizeManualImages/AnonymizationResultPreview.png';
import AnonymizationAnalysisResult from './AnonymizeManualImages/AnonymizationAnalysisResult.png';

const AnonymizeManual = () => {
  const content = (
    <div className="anonymize-manual">
      <h1>Anonymize Dataset Manual</h1>
      <br />
      <ImportManual />
      <div className="anonymize-manual-attribute">
        <p><b>Anonymize Dataset:</b></p>
        <p>To anonymize a dataset click the ANONYMIZE DATASET tab.</p>
        <div className="anonymize-dataset-tab-img">
          <img src={AnonymizeDatasetTab} alt="Anonymize Dataset Tab" />
        </div>
        <br />
        <p>
          When the ANONYMIZE DATASET tab is clicked the Import Hierarchies, Set Privacy Model(s)
          and Set Suppression Limit fields will be displayed with the ANONYMIZE DATASET button.
        </p>
        <div className="anonymize-dataset-fields-img">
          <img src={AnonymizeDatasetFields} alt="Anonymize Dataset Fields" />
        </div>
        <br />
        <p><b>Import Hierarchies field:</b></p>
        <p>
          Hierarchies are strategies that define how the data is generalized.
        </p>
        <div className="import-hierarchies-img">
          <img src={ImportHierarchies} alt="Import Hierarchies" />
        </div>
        <br />
        <br />
        <p>
          To import a hierarchy, click the IMPORT button and choose a
          transformation model to import from a CSV file.
        </p>
        <br />
        <p><b>Set Privacy Model(s):</b></p>
        <p>
          Privacy models specify the requirements for anonymizing the dataset.
          By default, K-Anonymity is set to four, and all sensitive attributes have
          L-diversity set to two.
        </p>
        <div className="set-privacy-models-img">
          <img src={SetPrivacyModels} alt="Set Privacy Models" />
        </div>
        <PrivacyModels />
        <p><b>Change The Models And Values For Privacy Models:</b></p>
        <p>
          To change the default K-Anonymity value,
          click the input field and type or select a new value.
        </p>
        <div className="kanonymity-input-field-img">
          <img src={KanonymityInputField} alt="Kanonymity Input Field" />
        </div>
        <br />
        <p>
          To change the L-Diversity model to a different privacy model, click the dropdown box.
        </p>
        <div className="dropdown-privacy-models-img">
          <img src={DropdownPrivacyModels} alt="Dropdown Privacy Models" />
        </div>
        <br />
        <p>
          To change the default privacy model value,
          click the input field and type or select a new value.
        </p>
        <br />
        <div className="privacy-model-input-fields-img">
          <img src={PrivacyModelInputFields} alt="Privacy Model Input Fields" />
        </div>
        <br />
        <p><b>Suppression Limit:</b></p>
        <p>
          Suppression limit defines the percentage of rows allowed to delete from the dataset.
          This is done to lower the amount of outliers in the dataset.
        </p>
        <div className="set-suppression-limit-img">
          <img src={SetSuppressionLimit} alt="Set Suppression Limit" />
        </div>
        <br />
        <p>
          The suppression limit is by default set to zero. To change the suppression limit,
          click the input field and type a new value.
        </p>
        <p><b>Anonymize dataset:</b></p>
        <p>To anonymize the dataset, click the ANONYMIZE DATASET button.</p>
        <div className="anonymize-dataset-button-img">
          <img src={AnonymizeDatasetButton} alt="Anonymize Dataset Button" />
        </div>
        <p>When the anonymization is complete the result will be displayed.</p>
        <br />
        <p><b>Anonymization Result:</b></p>
        <p>
          After successfully anonymizing a dataset,
          a preview of the first one hundred rows will be displayed.
        </p>
        <div className="anonymization-result-preview-img">
          <img src={AnonymizationResultPreview} alt="Anonymization Result Preview" />
        </div>
        <br />
        <p>
          The anonymized dataset can be downloaded as a CSV file
          by clicking the DOWNLOAD DATASET button.
        </p>
        <br />
        <p><b>Analysis Result:</b></p>
        <div className="anonymization-analysis-result-img">
          <img src={AnonymizationAnalysisResult} alt="Anonymization Analysis Result" />
        </div>
        <p>
          The Average Prosecutor risk, Highest Prosecutor risk and Records
          Affected by Highest Prosecutor Risk is displayed with graph by default.
        </p>
        <p>
          In the prosecutor model the attacker targets a specific individual,
          and it is assumed that the attacker already knows that data about the individual,
          is contained in the dataset.
        </p>
        <br />
        <p><b>Analysis Report:</b></p>
        <p>
          To download a anonymization report as PDF click the
          DOWNLOAD ANONYMIZATION REPORT AS PDF button.
        </p>
      </div>
      <br />
      <ResultManual />
      <div className="anonymize-manual-attribute">
        <br />
        <p><b>Attribute Generalization Level:</b></p>
        <div className="attribute-generalization-level-panel-img">
          <img src={AttributeGeneralizationLevelPanel} alt="Attribute Generalization Level Panel" />
        </div>
        <br />
        <p>
          Clicking the Attribute Generalization Level panel will display a
          table showing which generalization level was used to fulfill the privacy model criteria.
        </p>
        <div className="attribute-generalization-level-metrics-img">
          <img src={AttributeGeneralizationLevelMetrics} alt="Attribute Generalization Level Metrics" />
        </div>
      </div>
    </div>
  );
  return content;
};

export default AnonymizeManual;
