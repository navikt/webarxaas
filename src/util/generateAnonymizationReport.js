export default function generateAnonymizationReport(response, analysisReportContent,
  privacyModels) {
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
      .replace(',', '\n')
      .replace(/:/g, ': ')
      .replace(/"/g, '')
      .replace(/_/g, ' ');

    privacyModelTable.push([privacyModel, params]);
  });

  const anonymizeReportContent = {
    content: [
      '\n',
      { text: 'Privacy Model Used', style: 'subheader' },
      '\n',
      'The table shows the privacy model used, when anonymizing the dataset.',
      {
        table: {
          widths: ['*', '*'],
          body: privacyModelTable,
        },
      },
      '\n',
      { text: 'Attribute Generalization Level', style: 'subheader' },
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

  anonymizeReportContent.content.forEach((item) => {
    newReportContent.content.push(item);
  });

  return newReportContent;
}
