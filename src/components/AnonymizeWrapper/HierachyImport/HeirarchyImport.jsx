import React from 'react';
import handleHierarchyUpload from '../../../util/handleHierarchyUpload';

const HeirarcyImport = (props) => {
  const {
    attributes, setAttributes,
  } = props;
  const content = (
    <table>
      {attributes.map(({ field, attributeTypeModel }, index) => {
        if (attributeTypeModel === 'QUASIIDENTIFYING') {
          return (
            <tbody key={field}>
              <tr>
                <td>{field}</td>
                <td>
                  <input type="file" onChange={e => handleHierarchyUpload(e.target.files[0], index, attributes, setAttributes)} />
                </td>
              </tr>
            </tbody>
          );
        }
        return null;
      })
      }
    </table>
  );
  return content;
};
export default HeirarcyImport;
