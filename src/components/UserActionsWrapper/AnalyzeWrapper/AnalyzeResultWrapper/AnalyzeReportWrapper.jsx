import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import generateAnalysisReport from '../../../../util/generateAnalysisReport';

const AnalyzeReportWrapper = (props) => {
  const {
    response, fileName, attributes, setSnackbar,
  } = props;

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  let content = '';

  if (response.reIdentificationRisk) {
    content = (
      <div className="download-report-button small" style={{ margin: '5em 0 5em 0' }}>
        <Knapp
          htmlType="button"
          onClick={
            () => {
              const reportFileName = fileName.toString().replace('.csv', '').concat('_report.pdf');
              generateAnalysisReport(
                response, fileName, attributes, setSnackbar,
              ).then((reportContent) => {
                pdfMake.createPdf(reportContent).download(reportFileName);
              });
            }
          }
        >
          Download Analysis Report as PDF
        </Knapp>
      </div>
    );
  }

  return content;
};
export default AnalyzeReportWrapper;
