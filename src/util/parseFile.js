import papaparse from 'papaparse';

export default function ParseFile(
  file, setAttributes, setDataset, defaultAttributeType,
  setLoadingDataset, setSnackbar,
) {
  const newDataset = [];
  const snackbar = (
    open, variant, message,
  ) => {
    setSnackbar({
      open,
      variant,
      message,
    });
  };

  if (file) {
    papaparse.parse(file, {
      preview: 100,
      step(row) {
        newDataset.push(row.data);
        if (newDataset.length > 0) {
          const headers = newDataset[0];
          const attributeTypeModel = defaultAttributeType;
          setAttributes(headers.map(field => ({ field, attributeTypeModel })));
          setDataset(newDataset);
          setLoadingDataset(false);
          snackbar(true, 'success', 'Dataset imported successfully.');
        }
      },
      error() {
        setLoadingDataset(false);
        snackbar(true, 'error', 'Failed to import dataset. Parse error.');
      },
    });
  } else {
    setLoadingDataset(false);
    snackbar(true, 'error', 'Failed to import dataset.');
  }
}
