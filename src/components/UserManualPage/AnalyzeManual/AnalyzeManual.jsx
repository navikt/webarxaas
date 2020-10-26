import React from 'react';
import './__css__/AnalyzeManual.css';
import ImportManual from '../ImportManual/ImportManual';
import ResultManual from '../ResultManual/ResultManual';
import AnalysisResult from './AnalyzeManualImages/AnalysisResult.png';
import DownloadAnalysisReportAsPDF from './AnalyzeManualImages/DownloadAnalysisReportAsPDF.png';

const AnalyzeManual = () => {
  const content = (
    <div className="analyze-manual">
      <h1>Analyze re-identification risk manual</h1>
      <br />
      <ImportManual />
      <div className="analyze-manual-attribute">
        <p><b>Analyze dataset:</b></p>
        <p>To analyse the dataset, click the ANALYZE RE-IDENTIFICATION RISK button.</p>
        <p>When the analysis is complete the result will be displayed.</p>
        <div className="analyze-result-img">
          <img src={AnalysisResult} alt="Analysis Result" />
        </div>
        <br />
        <p><b>Analysis Result:</b></p>
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
          To download an analysis report as PDF click the
          DOWNLOAD ANALYSIS REPORT AS PDF button.
        </p>
        <div className="download-PDF-img">
          <img src={DownloadAnalysisReportAsPDF} alt="Download PDF Report" />
        </div>
      </div>
      <br />
      <ResultManual />
    </div>
  );
  return content;
};

export default AnalyzeManual;
