import React from 'react';
import handleHierarchyUpload from '../../../util/handleHierarchyUpload';

const ImportHierarchies = (props) => {
  const {
    attributes, setAttributes,
  } = props;
  const content = (
    <div className="hierarchy-import" align="center">
      <table>
        {attributes.map(({ field, attributeTypeModel }, index) => {
          if (attributeTypeModel === 'QUASIIDENTIFYING') {
            return (
              <tbody key={field}>
                <tr>
                  <td>{field}</td>
                  <td>
                    <input
                      type="file"
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          handleHierarchyUpload(
                            e.target.files[0], index, attributes, setAttributes,
                          );
                        }
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            );
          }
          return null;
        })
        }
      </table>
    </div>
  );
  return content;
};
export default ImportHierarchies;
