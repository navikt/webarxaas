import React from 'react';
import HierarchyImport from './HierachyImport/HeirarchyImport';

const AnonymizeWrapper = (props) => {
  const {
    attributes, setAttributes,
  } = props;

  const content = (
    <div>
      <table>
        {attributes.map(({ field }, index) => (
          <HierarchyImport
            name={field}
            key={field}
            index={index}
            attributes={attributes}
            setAttributes={setAttributes}
          />
        ))}
      </table>
    </div>
  );
  return content;
};
export default AnonymizeWrapper;
