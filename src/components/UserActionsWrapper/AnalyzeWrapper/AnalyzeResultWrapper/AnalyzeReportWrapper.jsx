import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import toPercent from '../../../../util/ratioToPercent';


const AnalyzeReportWrapper = (props) => {
  const { response, fileName, attributes } = props;

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportFileName = fileName.toString().replace('.csv', '').concat('_report.pdf');
  const now = new Date();
  const date = ((now.getDate() < 10 ? '0' : '') + now.getDate());
  const month = ((now.getMonth() < 10 ? '0' : '') + now.getMonth());
  const year = now.getFullYear();
  const hour = ((now.getHours() < 10 ? '0' : '') + now.getHours());
  const minute = ((now.getMinutes() < 10 ? '0' : '') + now.getMinutes());

  const attributesUsed = [[{ text: 'Column name', bold: true }, { text: 'Attribute Type', bold: true }]];
  attributes.forEach((item) => {
    attributesUsed.push([item.field, item.attributeTypeModel]);
  });

  const prosecutorRisk = [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }]];
  prosecutorRisk.push(['Estimated prosecutor risk', toPercent(response.reIdentificationRisk.measures.estimated_prosecutor_risk)]);
  prosecutorRisk.push(['Average prosecutor risk', toPercent(response.reIdentificationRisk.measures.average_prosecutor_risk)]);
  prosecutorRisk.push(['Highest prosecutor risk', toPercent(response.reIdentificationRisk.measures.highest_prosecutor_risk)]);
  prosecutorRisk.push(['Records affected by highest prosecutor risk', toPercent(response.reIdentificationRisk.measures
    .records_affected_by_highest_prosecutor_risk)]);
  prosecutorRisk.push(['Prosecutor attacker success rate', toPercent(response.reIdentificationRisk.attackerSuccessRate.successRates
    .Prosecutor_attacker_success_rate)]);


  const reportContent = {
    content: [
      {
        text: 'Re-Identification Analysis Report',
        style: 'header',
        alignment: 'center',
      },
      '\n',
      {
        text: [
          { text: 'Analysis Report for: ', bold: true },
          `${fileName.toString()}`,
        ],
      },
      {
        text: [
          { text: 'Report Time: ', bold: true },
          `${hour}:${minute}`,
        ],
      },
      {
        text: [
          { text: 'Report Date: ', bold: true },
          `${date}.${month}.${year}`,
        ],
      },
      '\n',
      { text: 'Attributes Used', style: 'subheader' },
      'The table shows which attributes was used on each column, when analyzing for re-identification risk.',
      {
        table: {
          widths: ['*', '*'],
          body: attributesUsed,
        },
      },
      '\n',
      {
        text: 'Analysis Result',
        style: 'subheader',
      },
      '\n',
      {
        text: 'Prosecutor Model',
        bold: true,
      },
      'n the prosecutor model the attacker targets a specific individual, and it is assumed that the attacker already knows that data about the individual, is contained in the dataset.',
      {
        table: {
          widths: ['*', '*'],
          body: prosecutorRisk,
        },
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 15,
        bold: true,
      },
    },
  };

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
