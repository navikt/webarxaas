import ReactTable from 'react-table';
import React from 'react';
import 'react-table/react-table.css';

const AnonymizedDatasetTable = (props) => {
  const { response } = props;
  const columns = Object.keys(response.anonymizeResult.data[0]).map(key => ({
    Header: response.anonymizeResult.data[0][key],
    accessor: key,
  }));

  const data = response.anonymizeResult.data.slice(1);

  const content = (
    <div className="anonymized-dataset-table">
      <ReactTable data={data} columns={columns} />
    </div>
  );
  return content;
};
export default AnonymizedDatasetTable;
