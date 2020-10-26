import React from 'react';
import HelpText from '../../../HelpTextWrapper/HelpText';

const ImportDatasetHelpText = () => {
  const dialogTitleImportDataset = 'CSV import file:';

  const dialogContentImportDataset = (
    <p>
      Import dataset with drag and drop functionality or choose file location.
      <br />
      <br />
      To display Æ, Ø, and Å, make sure the imported tabular
      dataset is saved as a CSV file with UTF-8
    </p>
  );
  const content = (
    <HelpText
      dialogTitle={dialogTitleImportDataset}
      dialogContent={dialogContentImportDataset}
      buttonType
    />
  );
  return content;
};

export default ImportDatasetHelpText;
