import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import toPercent from '../../../../util/ratioToPercent';


const AnalyzeReportWrapper = (props) => {
  const { response, file, attributes } = props;

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportFileName = file.name.toString().replace('.csv', '').concat('_report.pdf');
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

  const journalistRisk = [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }]];
  journalistRisk.push(['Estimated journalist risk', toPercent(response.reIdentificationRisk.measures.estimated_journalist_risk)]);
  journalistRisk.push(['Highest journalist risk', toPercent(response.reIdentificationRisk.measures.highest_journalist_risk)]);
  journalistRisk.push(['Records affected by highest journalist risk', toPercent(response.reIdentificationRisk.measures
    .records_affected_by_highest_journalist_risk)]);
  journalistRisk.push(['Journalist attacker success rate', toPercent(response.reIdentificationRisk.attackerSuccessRate.successRates
    .Journalist_attacker_success_rate)]);

  const marketerRisk = [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }]];
  marketerRisk.push(['Estimated marketer risk', toPercent(response.reIdentificationRisk.measures.estimated_marketer_risk)]);
  marketerRisk.push(['Marketer attacker success rate', toPercent(response.reIdentificationRisk.attackerSuccessRate.successRates
    .Marketer_attacker_success_rate)]);

  const populationRisk = [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }]];
  populationRisk.push(['Population uniques', toPercent(response.reIdentificationRisk.measures.population_uniques)]);

  const lowestRisk = [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }]];
  lowestRisk.push(['Lowest risk', toPercent(response.reIdentificationRisk.measures.lowest_risk)]);
  lowestRisk.push(['Records affected by lowest risk', toPercent(response.reIdentificationRisk.measures.records_affected_by_lowest_risk)]);

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
          `${file.name.toString()}`,
        ],
      },
      {
        text: [
          { text: 'Created Time: ', bold: true },
          `${hour}:${minute}`,
        ],
      },
      {
        text: [
          { text: 'Created Date: ', bold: true },
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
      'In the prosecutor model the attacker targets a specific individual, and it is assumed that the attacker already knows that data about the individual, is contained in the dataset.',
      {
        table: {
          widths: ['*', '*'],
          body: prosecutorRisk,
        },
      },
      '\n',
      {
        text: 'Journalist Model',
        bold: true,
      },
      'In the journalist model the attacker is trying to randomly re-identify a individual with no background knowledge on anyone in the dataset.',
      {
        table: {
          widths: ['*', '*'],
          body: journalistRisk,
        },
      },
      '\n',
      {
        text: 'Marketer Model',
        bold: true,
      },
      'In the marketer model the attacker does not target a specific individual but aims at re-identifying a high number of individuals. An attack can therefore only be considered successful if a larger fraction of the records could be re-identified.',
      {
        table: {
          widths: ['*', '*'],
          body: marketerRisk,
        },
      },
      '\n',
      {
        text: 'Population',
        bold: true,
      },
      'The population uniqueness privacy model aims at protecting dataset from re-identification in the marketer model by enforcing thresholds on the proportion of records that are unique within the underlying population. For this purpose, basic information about the population has to be specified. Based on this data, statistical super-population models are used to estimate characteristics of the overall population with probability distributions that are parameterized with sample characteristics.',
      '/n',
      `Population model: ${response.reIdentificationRisk.populationModel}`,
      {
        table: {
          widths: ['*', '*'],
          body: populationRisk,
        },
      },
      '\n',
      {
        text: 'Lowest risk',
        bold: true,
      },
      'Lowest risk displays the lowest risk in the dataset.',
      'Records affected by lowest risk displays the percentage of records with the lowest risk.',
      {
        table: {
          widths: ['*', '*'],
          body: lowestRisk,
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
