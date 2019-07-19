import ReactTable from 'react-table';
import React from 'react';
import 'react-table/react-table.css';

const AnonymizedDatasetTable = (props) => {
  const { anonymizeResult } = props;
  const columns = Object.keys(anonymizeResult.data[0]).map(key => ({
    Header: anonymizeResult.data[0][key],
    accessor: key,
  }));

  const data = anonymizeResult.data.slice(1);

  const content = (
    <div className="anonymized-dataset-table">
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
