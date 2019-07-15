import React from 'react';
import handleHierarchyUpload from '../../../util/handleHierarchyUpload';

const HeirarcyImport = (props) => {
  const {
    name, index, attributes, setAttributes,
  } = props;

  const content = (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>
          <input type="file" onChange={e => handleHierarchyUpload(e.target.files[0], name, index, attributes, setAttributes)} />
        </td>
      </tr>
    </tbody>
  );
  return content;
};
export default HeirarcyImport;
