import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import generateAnalysisReport from '../../../../util/generateAnalysisReport';
import generateAnonymizationReport from '../../../../util/generateAnonymizationReport';

const AnonymizeReportWrapper = (props) => {
  const {
    response, fileName, attributes, privacyModels,
    suppressionLimit, setSnackbar,
  } = props;

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const document = {
    title: 'Re-Identification Anonymization Report',
    fileName,
  };

  const content = (
    <div className="download-report-button small" style={{ margin: '5em 0 5em 0' }}>
      <Knapp
        htmlType="button"
        onClick={
          () => {
            const reportFileName = fileName.toString().replace('.csv', '').concat('_report.pdf');
            generateAnalysisReport(response.riskProfile, attributes,
              document, setSnackbar)
              .then((analysisReportContent) => {
                const reportContent = generateAnonymizationReport(response,
                  analysisReportContent, privacyModels, suppressionLimit);
                pdfMake.createPdf(reportContent).download(reportFileName);
              });
          }
        }
      >
        Download Anonymization Report as PDF
      </Knapp>
    </div>
  );

  return content;
};
export default AnonymizeReportWrapper;
