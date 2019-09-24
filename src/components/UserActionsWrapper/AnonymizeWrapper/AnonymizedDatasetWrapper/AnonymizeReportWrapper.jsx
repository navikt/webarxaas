import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import generateAnalysisReport from '../../../../util/generateAnalysisReport';
import generateAnonymizationReport from '../../../../util/generateAnonymizationReport';

const AnonymizeReportWrapper = (props) => {
  const {
    response, fileName, attributes, privacyModels,
  } = props;

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const content = (
    <div className="download-report-button small" style={{ margin: '5em 0 5em 0' }}>
      <Knapp
        htmlType="button"
        onClick={
          () => {
            const reportFileName = fileName.toString().replace('.csv', '').concat('_report.pdf');
            const analysisReportContent = generateAnalysisReport(response.riskProfile,
              fileName,
              attributes);
            const reportContent = generateAnonymizationReport(response,
              analysisReportContent, privacyModels);
            pdfMake.createPdf(reportContent).download(reportFileName);
          }
        }
      >
        Download Analysis Report as PDF
      </Knapp>
    </div>
  );

  return content;
};
export default AnonymizeReportWrapper;
