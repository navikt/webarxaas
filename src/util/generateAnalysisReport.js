import toPercent from './ratioToPercent';
import NavLogo from './resources/img/logo-nav.png';
import exportCharts from './exportCharts';

export default async function generateAnalysisReport(response, fileName, attributes, setSnackbar) {
  const snackbar = (
    open, variant, message,
  ) => {
    setSnackbar({
      open,
      variant,
      message,
    });
  };

  snackbar(true, 'success', 'Preparing report content, download will begin shortly.');
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

  const distributionOfRisk = [[{ text: 'Interval', bold: true }, { text: 'Records With Risk', bold: true }, { text: 'Records With Maximal Risk', bold: true }]];
  response.distributionOfRisk.riskIntervalList.forEach((item) => {
    distributionOfRisk.push([item.interval,
      toPercent(item.recordsWithRiskWithinInterval),
      toPercent(item.recordsWithMaximalRiskWithinInterval)]);
  });

  const attributeRisk = [[{ text: 'Column', bold: true }, { text: 'Distinction', bold: true }, { text: 'Separation', bold: true }]];
  response.attributeRisk.quasiIdentifierRiskList.forEach((item) => {
    attributeRisk.push([item.identifier, toPercent(item.distinction), toPercent(item.separation)]);
  });

  const riskBarometer = await exportCharts('risk-barometer');

  const riskBarometerTwoBars = await exportCharts('risk-barometer-2-bars');

  return {
    content: [
      {
        alignment: 'justify',
        columns: [
          {
            text: 'Re-Identification Analysis Report',
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
          `${fileName.toString()}`,
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
      { text: 'Attribute types:', bold: true },
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
        image: riskBarometer,
        width: 1700,
        alignment: 'center',
      },
      '\n',
      {
        image: riskBarometerTwoBars,
        width: 1700,
        alignment: 'center',
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
          body: [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }],
            ['Estimated prosecutor risk', toPercent(response.reIdentificationRisk.measures.estimated_prosecutor_risk)],
            ['Average prosecutor risk', toPercent(response.reIdentificationRisk.measures.average_prosecutor_risk)],
            ['Highest prosecutor risk', toPercent(response.reIdentificationRisk.measures.highest_prosecutor_risk)],
            ['Records affected by highest prosecutor risk', toPercent(response.reIdentificationRisk.measures.records_affected_by_highest_prosecutor_risk)],
            ['Prosecutor attacker success rate', toPercent(response.reIdentificationRisk.attackerSuccessRate.successRates.Prosecutor_attacker_success_rate)]],
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
          body: [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }],
            ['Estimated journalist risk', toPercent(response.reIdentificationRisk.measures.estimated_journalist_risk)],
            ['Highest journalist risk', toPercent(response.reIdentificationRisk.measures.highest_journalist_risk)],
            ['Records affected by highest journalist risk', toPercent(response.reIdentificationRisk.measures.records_affected_by_highest_journalist_risk)],
            ['Journalist attacker success rate', toPercent(response.reIdentificationRisk.attackerSuccessRate.successRates.Journalist_attacker_success_rate)]],
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
          body: [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }],
            ['Estimated marketer risk', toPercent(response.reIdentificationRisk.measures.estimated_marketer_risk)],
            ['Marketer attacker success rate', toPercent(response.reIdentificationRisk.attackerSuccessRate.successRates.Marketer_attacker_success_rate)]],
        },
      },
      '\n',
      {
        text: 'Population',
        bold: true,
      },
      'The population uniqueness privacy model aims at protecting dataset from re-identification in the marketer model by enforcing thresholds on the proportion of records that are unique within the underlying population. For this purpose, basic information about the population has to be specified. Based on this data, statistical super-population models are used to estimate characteristics of the overall population with probability distributions that are parameterized with sample characteristics.',
      '\n',
      `Population model: ${response.reIdentificationRisk.populationModel}`,
      {
        table: {
          widths: ['*', '*'],
          body: [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }],
            ['Population uniques', toPercent(response.reIdentificationRisk.measures.population_uniques)]],
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
          body: [[{ text: 'Risk Type', bold: true }, { text: 'Risk Amount', bold: true }],
            ['Lowest risk', toPercent(response.reIdentificationRisk.measures.lowest_risk)],
            ['Records affected by lowest risk', toPercent(response.reIdentificationRisk.measures.records_affected_by_lowest_risk)]],
        },
      },
      '\n',
      {
        text: 'Sample uniques',
        bold: true,
      },
      'displays the unique data in percent, contained in the dataset',
      {
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
      'The distribution of re-identification risk amongst the records of the dataset. The interval shows the percentage of risk [from,to), and the records that are within that risk. The amount of records with maximum risk within the intervel is also displayed.',
      {
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
        table: {
          widths: ['*', '*', '*'],
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
