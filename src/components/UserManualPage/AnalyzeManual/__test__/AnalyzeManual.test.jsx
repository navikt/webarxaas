import React from 'react';
import AnalyzeManual from '../AnalyzeManual';
import { shallow } from '../../../../enzyme';
import ImportManual from '../../ImportManual/ImportManual';
import ResultManual from '../../ResultManual/ResultManual';
import DownloadAnalysisReportAsPDF from '../AnalyzeManualImages/DownloadAnalysisReportAsPDF.png';
import AnalysisResult from '../AnalyzeManualImages/AnalysisResult.png';

describe('AnalyzeManual: Render test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<AnalyzeManual />);
  });

  it('Render test', () => {
    expect(wrapper.contains(<h1>Analyze re-identification risk manual</h1>)).toBeTruthy();
    expect(wrapper.contains(<p><b>Analysis Result:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<p><b>Analysis Report:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<img src={AnalysisResult} alt="Analysis Result" />)).toBeTruthy();
    expect(wrapper.contains(<img src={DownloadAnalysisReportAsPDF} alt="Download PDF Report" />)).toBeTruthy();
    expect(wrapper.find(ImportManual).length).toEqual(1);
    expect(wrapper.find(ResultManual).length).toEqual(1);
  });
});
