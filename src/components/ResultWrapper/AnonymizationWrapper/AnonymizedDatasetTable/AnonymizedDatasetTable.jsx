import ReactTable from 'react-table';
import React from 'react';
import 'react-table/react-table.css';

const AnonymizedDatasetTable = (props) => {
  const { anonymizedDataset } = props;
  const columns = Object.keys(anonymizedDataset.data[0]).map(key => ({
    Header: anonymizedDataset.data[0][key],
    accessor: key,
  }));

  const data = anonymizedDataset.data.slice(1);

  const content = (
    <div className="anonymized-dataset-table">
      <ReactTable data={data} columns={columns} />
    </div>
  );
  return content;
};
export default AnonymizedDatasetTable;
