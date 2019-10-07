import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import generateAnalysisReport from '../../../../util/generateAnalysisReport';
import generateAnonymizationReport from '../../../../util/generateAnonymizationReport';
import handleJsonExport from '../../../../util/handleJsonExport';
import prepareJsonExportData from '../../../../util/prepareJsonExportData';
import './__css__/AnonymizedDatasetWrapper.css';

const AnonymizeReportWrapper = (props) => {
  const {
    response, fileName, attributes, privacyModels,
    suppressionLimit,
  } = props;

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const document = {
    title: 'Re-Identification Anonymization Report',
    fileName,
  };

  const content = (
    <div>
      <div className="download-report-button small">
        <Knapp
          htmlType="button"
          onClick={
            () => {
              const reportFileName = fileName.toString().replace('.csv', '').concat('_report.pdf');
              const analysisReportContent = generateAnalysisReport(response.riskProfile,
                attributes, document);
              const reportContent = generateAnonymizationReport(response,
                analysisReportContent, privacyModels, suppressionLimit);
              pdfMake.createPdf(reportContent).download(reportFileName);
            }
          }
        >
          Download Anonymization Report as PDF
        </Knapp>
      </div>
      <div className="download-report-button small">
        <Knapp
          htmlType="button"
          onClick={
            () => {
              const objectToExport = prepareJsonExportData(response.riskProfile, attributes,
                privacyModels, suppressionLimit,
                response.anonymizeResult.metrics.attributeGeneralization);
              handleJsonExport(objectToExport, fileName, '_report.json', 'anonymization_report.json');
            }
          }
        >
          Download Anonymization Report as JSON
        </Knapp>
      </div>
    </div>
  );

  return content;
};
export default AnonymizeReportWrapper;
