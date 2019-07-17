import ParseFile from './parseFile';

export default function dragAndDropFile(
  setAttributes, setDataset, defaultAttributeType, setLoadingDataset,
) {
  const form = document.querySelector('.import-dataset-form');
  const input = document.querySelector('.import-dataset-input');

  const isSupportedBrowser = () => {
    const div = document.createElement('div');
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
  };

  if (isSupportedBrowser && form != null) {
    form.classList.add('has-advanced-upload');

    form.addEventListener('drop', (e) => {
      input.files = e.dataTransfer.files;
      setLoadingDataset(true);
      ParseFile(
        input.files[0], setAttributes, setDataset, defaultAttributeType, setLoadingDataset,
      );
    });

    // css / animations
    ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach((event) => {
      form.addEventListener(event, (e) => {
        // preventing unwanted behaviours
        e.preventDefault();
        e.stopPropagation();
      });
    });
    ['dragover', 'dragenter'].forEach((event) => {
      form.addEventListener(event, () => {
        form.classList.add('is-dragover');
      });
    });
    ['dragleave', 'dragend', 'drop'].forEach((event) => {
      form.addEventListener(event, () => {
        form.classList.remove('is-dragover');
      });
    });
  }
}
