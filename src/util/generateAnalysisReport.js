import toPercent from './ratioToPercent';
import NavLogo from './resources/img/logo-nav.png';

export default function generateAnalysisReport(response, attributes, document) {
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

  const distributionOfRisk = [[{ text: 'Risk Interval', bold: true }, { text: 'Records Within Interval', bold: true }, { text: 'Records With Maximal Risk Within Interval', bold: true }]];
  response.distributionOfRisk.riskIntervalList.forEach((item) => {
    distributionOfRisk.push([item.interval,
      toPercent(item.recordsWithRiskWithinInterval),
      toPercent(item.recordsWithMaximalRiskWithinInterval)]);
  });

  const attributeRisk = [[{ text: 'Column', bold: true }, { text: 'Distinction', bold: true }, { text: 'Separation', bold: true }]];
  response.attributeRisk.quasiIdentifierRiskList.forEach((item) => {
    attributeRisk.push([item.identifier, toPercent(item.distinction), toPercent(item.separation)]);
  });

  const tableMargin = [0, 8, 0, 0];
  const textMargin = [0, 0, 0, 8];

  return {
    content: [
      {
        alignment: 'justify',
        columns: [
          {
            text: document.title,
            style: 'header',
            alignment: 'center',
          },
          {
            image: NavLogo,
            alignment: 'right',
          },
        ],
      },
      '\n',
      {
        text: [
          { text: 'Analysis Report for: ', bold: true },
          `${document.fileName.toString()}`,
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
      '\n',
      { text: 'Attribute types:', bold: true, margin: textMargin },
      {
        ul: [
          {
            text: [
              { text: 'Identifying', bold: true },
              ' attributes are associated with a high risk of re-identification.',
            ],
          },
          {
            text: [
              { text: 'Quasi-identifying', bold: true },
              ' attributes can in combination be used for re-identification attacks.',
            ],
          },
          {
            text: [
              { text: 'Sensitive', bold: true },
              ' attributes encode properties with which individuals are not willing to be linked with. As such, they might be of interest to an attacker and, if disclosed, could cause harm to data subjects.',
            ],
          },
          {
            text: [
              { text: 'Insensitive', bold: true },
              ' attributes are not associated with privacy risks.',
            ],
          },
        ],
      },
      '\n',
      'The table shows which attributes was used on each column, when analyzing for re-identification risk.',
      {
        margin: tableMargin,
        table: {
          widths: [300, '*'],
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
        margin: textMargin,
      },
      'In the prosecutor model the attacker targets a specific individual, and it is assumed that the attacker already knows that data about the individual, is contained in the dataset.',
      {
        margin: tableMargin,
        table: {
          widths: ['*', '*'],
          body: [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }],
            ['Estimated risk', toPercent(response.reIdentificationRisk.measures.estimated_prosecutor_risk)],
            ['Average risk', toPercent(response.reIdentificationRisk.measures.average_prosecutor_risk)],
            ['Highest risk', toPercent(response.reIdentificationRisk.measures.highest_prosecutor_risk)],
            ['Records affected by highest risk', toPercent(response.reIdentificationRisk.measures.records_affected_by_highest_prosecutor_risk)],
            ['Attacker success rate', toPercent(response.reIdentificationRisk.attackerSuccessRate.successRates.Prosecutor_attacker_success_rate)]],
        },
      },
      '\n',
      {
        text: 'Lowest risk',
        bold: true,
        margin: textMargin,
      },
      'Lowest risk displays the lowest risk in the dataset.',
      'Records affected by lowest risk displays the percentage of records with the lowest risk.',
      {
        margin: tableMargin,
        table: {
          widths: ['*', '*'],
          body: [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }],
            ['Lowest risk', toPercent(response.reIdentificationRisk.measures.lowest_risk)],
            ['Records affected by lowest risk', toPercent(response.reIdentificationRisk.measures.records_affected_by_lowest_risk)]],
        },
      },
      '\n',
      {
        text: 'Sample uniques',
        bold: true,
        margin: textMargin,
      },
      'displays the unique data in percent, contained in the dataset',
      {
        margin: tableMargin,
        table: {
          widths: ['*', '*'],
          body: [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }], ['Sample uniques', toPercent(response.reIdentificationRisk.measures.sample_uniques)]],
        },
      },
      '\n',
      {
        text: 'Distribution of risk',
        style: 'subheader',
      },
      '\n',
      'The distribution of re-identification risk amongst the records of the dataset. The interval shows the percentage of risk [from,to), and the records that are within that risk. The amount of records with maximum risk within the intervel is also displayed.',
      {
        margin: tableMargin,
        table: {
          widths: ['*', '*', '*'],
          body: distributionOfRisk,
        },
      },
      '\n',
      {
        text: 'Attribute risk',
        style: 'subheader',
      },
      '\n',
      'Shows the distinction and separation associated with each column in the dataset',
      '\n',
      {
        text: [
          { text: 'Distinction', bold: true },
          ' represents the ratio between the unique values for the quasi-identifiers and the total number of records.',
        ],
      },
      '\n',
      {
        text: [
          { text: 'Separation', bold: true },
          ' represents the ratio between pairs of records with at least one different value for their quasi-identifiers, and the total number of ways that two different records can be paired. In general, a higher distinction and separation are indicators that the quasi-identifiers are more likely to re-identify a record.',
        ],
      },
      {
        margin: tableMargin,
        table: {
          widths: [350, 70, 70],
          body: attributeRisk,
        },
      },
    ],
    styles: {
      header: {
        fontSize: 20,
        bold: true,
      },
      subheader: {
        fontSize: 15,
        bold: true,
      },
    },
  };
}
