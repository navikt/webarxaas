export default function generateAnonymizationReport(response, analysisReportContent,
  privacyModels, suppressionLimit) {
  const newReportContent = analysisReportContent;
  const attributeGeneralization = [[{ text: 'Column name', bold: true }, { text: 'Type', bold: true }, { text: 'Generalization level', bold: true }]];
  response.anonymizeResult.metrics.attributeGeneralization.forEach((item) => {
    attributeGeneralization.push([item.name, item.type, item.generalizationLevel]);
  });

  const privacyModelTable = [[{ text: 'Privacy model', bold: true }, { text: 'Parameters', bold: true }]];
  privacyModels.forEach((item) => {
    const { privacyModel } = item;
    let params = JSON.stringify(item.params);

    params = params.replace('{', '')
      .replace('}', '')
      .replace(/,/g, '\n')
      .replace(/:/g, ': ')
      .replace(/"/g, '')
      .replace(/_/g, ' ');

    privacyModelTable.push([privacyModel, params]);
  });

  const anonymizeReportContent = {
    content: [
      '\n',
      { text: 'Anonymization Metrics', style: 'subheader' },
      '\n',
      { text: 'Privacy model used', bold: true },
      '\n',
      'The table shows the privacy model used, when anonymizing the dataset.',
      {
        table: {
          widths: ['*', '*'],
          body: privacyModelTable,
        },
      },
      '\n',
      { text: 'Suppression Limit Used', bold: true },
      '\n',
      'Suppression limit defines the percentage of rows allowed to delete from the dataset. This is done to lower the amount of outliers in the dataset.',
      {
        table: {
          widths: ['*', '*'],
          body: [['', { text: 'Amount', bold: true }],
            ['Suppression limit', `${suppressionLimit} %`]],
        },
      },
      '\n',
      { text: 'Attribute Generalization Level', bold: true },
      '\n',
      'The table shows the generalization level used to fullfil the privacy model criterion.',
      {
        table: {
          widths: ['*', '*', 100],
          body: attributeGeneralization,
        },
      },
    ],
  };

  let index = 13;
  anonymizeReportContent.content.forEach((item) => {
    newReportContent.content.splice(index, 0, item);
    index += 1;
  });

  return newReportContent;
}
