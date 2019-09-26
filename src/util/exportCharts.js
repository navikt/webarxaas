import DomToImage from 'dom-to-image';

export default async function exportCharts(chartNode) {
  const node = document.getElementsByClassName(chartNode)[0];
  const dataURL = await DomToImage.toPng(node);
  return dataURL;
}
