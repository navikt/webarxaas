import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import generateAnalysisReport from '../../../../util/generateAnalysisReport';
import handleJsonExport from '../../../../util/handleJsonExport';
import prepareJsonExportData from '../../../../util/prepareJsonExportData';
import './__css__/AnalysisWrapper.css';

const AnalyzeReportWrapper = (props) => {
  const { response, fileName, attributes } = props;

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  let content = '';

  const document = {
    title: 'Re-Identification Analysis Report',
    fileName,
  };

  if (response.reIdentificationRisk) {
    content = (
      <div>
        <div className="download-report-button small">
          <Knapp
            htmlType="button"
            onClick={
              () => {
                const reportFileName = fileName.toString().replace('.csv', '').concat('_report.pdf');
                const reportContent = generateAnalysisReport(response, attributes, document);
                pdfMake.createPdf(reportContent).download(reportFileName);
              }
            }
          >
            Download Analysis Report as PDF
          </Knapp>
        </div>
        <div className="download-report-button small">
          <Knapp
            htmlType="button"
            onClick={
              () => {
                const dataToExport = prepareJsonExportData(response, attributes);
                handleJsonExport(dataToExport, fileName, '_analysis_report.json', 'analysis_report.json');
              }
            }
          >
            Download Analysis Report as JSON
          </Knapp>
        </div>
      </div>
    );
  }

  return content;
};
export default AnalyzeReportWrapper;
