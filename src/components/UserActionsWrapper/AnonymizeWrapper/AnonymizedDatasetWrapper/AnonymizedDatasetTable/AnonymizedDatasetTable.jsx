import ReactTable from 'react-table';
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import 'react-table/react-table.css';

const AnonymizedDatasetTable = (props) => {
  const { anonymizeResult } = props;
  const columns = Object.keys(anonymizeResult.data[0]).map((key) => ({
    Header: anonymizeResult.data[0][key],
    accessor: key,
  }));

  const dataset = anonymizeResult.data;
  const data = dataset.slice(1, 101);

  const content = (
    <div className="anonymized-dataset-table">
      <Alert variant="info">
        Previewing first 100 of
        {' '}
        {dataset.length}
        {' '}
        rows in dataset
      </Alert>
      <ReactTable
        data={data}
        columns={columns}
        sortable={false}
        defaultPageSize={5}
      />
    </div>
  );
  return content;
};
export default AnonymizedDatasetTable;
