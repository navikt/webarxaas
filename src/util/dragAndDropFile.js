import ParseFile from './parseFile';

export default function dragAndDropFile(
  setAttributes, setDataset, defaultAttributeType, setLoadingDataset,
) {
  // feature detection for drag&drop upload
  const isAdvancedUpload = (function () {
    const div = document.createElement('div');
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
  }());

  // applying the effect for every form
  const forms = document.querySelectorAll('.box');
  Array.prototype.forEach.call(forms, (form) => {
    const input = form.querySelector('.input-file');
    const triggerFileDrop = function () {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('ondrop', true, false);
      form.dispatchEvent(event);
    };

    // drag&drop files if the feature is available
    if (isAdvancedUpload) {
      form.classList.add('has-advanced-upload'); // letting CSS know drag&drop is supported by the browser

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
      form.addEventListener('drop', (e) => {
        input.files = e.dataTransfer.files;
        triggerFileDrop();
      });
    }

    // if the form was submitted
    form.addEventListener('ondrop', (e) => {
      // ajax file upload for modern browsers
      if (isAdvancedUpload) {
        setLoadingDataset(true);
        ParseFile(
          input.files[0], setAttributes, setDataset, defaultAttributeType, setLoadingDataset,
        );
      }
    });

    // Firefox focus bug fix for file input
    input.addEventListener('focus', () => { input.classList.add('has-focus'); });
    input.addEventListener('blur', () => { input.classList.remove('has-focus'); });
  });
}
