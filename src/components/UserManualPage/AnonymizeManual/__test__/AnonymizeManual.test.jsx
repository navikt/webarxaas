import React from 'react';
import AnonymizeManual from '../AnonymizeManual';
import { shallow } from '../../../../enzyme';
import ImportManual from '../../ImportManual/ImportManual';
import AnonymizeDatasetTab from '../AnonymizeManualImages/AnonymizeDatasetTab.png';
import AnonymizeDatasetFields from '../AnonymizeManualImages/AnonymizeDatasetFields.png';
import ImportHierarchies from '../AnonymizeManualImages/ImportHierarchies.png';
import SetPrivacyModels from '../AnonymizeManualImages/SetPrivacyModels.png';
import PrivacyModels from '../../PrivacyModels/PrivacyModels';
import KanonymityInputField from '../AnonymizeManualImages/KanonymityInputField.png';
import DropdownPrivacyModels from '../AnonymizeManualImages/DropdownPrivacyModels.png';
import PrivacyModelInputFields from '../AnonymizeManualImages/PrivacyModelInputFields.png';
import SetSuppressionLimit from '../AnonymizeManualImages/SetSuppressionLimit.png';
import AnonymizeDatasetButton from '../AnonymizeManualImages/AnonymizeDatasetButton.png';
import AnonymizationResultPreview from '../AnonymizeManualImages/AnonymizationResultPreview.png';
import AnonymizationAnalysisResult from '../AnonymizeManualImages/AnonymizationAnalysisResult.png';
import ResultManual from '../../ResultManual/ResultManual';
import AttributeGeneralizationLevelPanel from '../AnonymizeManualImages/AttributeGeneralizationLevelPanel.png';
import AttributeGeneralizationLevelMetrics from '../AnonymizeManualImages/AttributeGeneralizationLevelMetrics.png';

describe('AnonymizeManual: Render Test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<AnonymizeManual />);
  });

  it('Render test', () => {
    expect(wrapper.contains(<h1>Anonymize Dataset Manual</h1>)).toBeTruthy();
    expect(wrapper.find(ImportManual).length).toEqual(1);
    expect(wrapper.contains(<p><b>Anonymize Dataset:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<img src={AnonymizeDatasetTab} alt="Anonymize Dataset Tab" />)).toBeTruthy();
    expect(wrapper.contains(<img src={AnonymizeDatasetFields} alt="Anonymize Dataset Fields" />)).toBeTruthy();
    expect(wrapper.contains(<p><b>Import Hierarchies field:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<img src={ImportHierarchies} alt="Import Hierarchies" />)).toBeTruthy();
    expect(wrapper.contains(<p><b>Set Privacy Model(s):</b></p>)).toBeTruthy();
    expect(wrapper.contains(<img src={SetPrivacyModels} alt="Set Privacy Models" />)).toBeTruthy();
    expect(wrapper.find(PrivacyModels).length).toEqual(1);
    expect(wrapper.contains(<img src={KanonymityInputField} alt="Kanonymity Input Field" />)).toBeTruthy();
    expect(wrapper.contains(<img src={DropdownPrivacyModels} alt="Dropdown Privacy Models" />)).toBeTruthy();
    expect(wrapper.contains(<img src={PrivacyModelInputFields} alt="Privacy Model Input Fields" />)).toBeTruthy();
    expect(wrapper.contains(<p><b>Suppression Limit:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<img src={SetSuppressionLimit} alt="Set Suppression Limit" />)).toBeTruthy();
    expect(wrapper.contains(<img src={AnonymizeDatasetButton} alt="Anonymize Dataset Button" />)).toBeTruthy();
    expect(wrapper.contains(<p><b>Anonymization Result:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<img src={AnonymizationResultPreview} alt="Anonymization Result Preview" />)).toBeTruthy();
    expect(wrapper.contains(<p><b>Analysis Result:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<img src={AnonymizationAnalysisResult} alt="Anonymization Analysis Result" />)).toBeTruthy();
    expect(wrapper.contains(<p><b>Analysis Report:</b></p>)).toBeTruthy();
    expect(wrapper.find(ResultManual).length).toEqual(1);
    expect(wrapper.contains(<p><b>Attribute Generalization Level:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<img src={AttributeGeneralizationLevelPanel} alt="Attribute Generalization Level Panel" />)).toBeTruthy();
    expect(wrapper.contains(<img src={AttributeGeneralizationLevelMetrics} alt="Attribute Generalization Level Metrics" />)).toBeTruthy();
  });
});
