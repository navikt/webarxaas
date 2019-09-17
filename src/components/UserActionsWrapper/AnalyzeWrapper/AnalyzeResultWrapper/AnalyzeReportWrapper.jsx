import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


const AnalyzeReportWrapper = (props) => {
  const { response, fileName } = props;

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportFileName = fileName.toString().replace('.csv', '').concat('_report.pdf');
  const reportContent = {
    content: [
      'Test test test',
      'hope this works',
      {
        text: 'This is a header',
        style: 'header',
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
    },
  };

  console.log(response);

  const content = (
    <div className="download-report-button small" style={{ margin: '5em 0 5em 0' }}>
      <Knapp
        htmlType="button"
        onClick={
          () => {
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
