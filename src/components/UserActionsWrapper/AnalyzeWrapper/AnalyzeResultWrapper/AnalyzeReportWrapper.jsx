import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import generateAnalysisReport from '../../../../util/generateAnalysisReport';

const AnalyzeReportWrapper = (props) => {
  const { response, file, attributes } = props;

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const content = (
    <div className="download-report-button small" style={{ margin: '5em 0 5em 0' }}>
      <Knapp
        htmlType="button"
        onClick={
          () => {
            const reportFileName = file.name.toString().replace('.csv', '').concat('_report.pdf');
            const reportContent = generateAnalysisReport(response, file, attributes);
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
export default AnalyzeReportWrapper;
