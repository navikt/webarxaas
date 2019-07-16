import React from 'react';
import HierarchyImport from './HierachyImport/HeirarchyImport';

const AnonymizeWrapper = (props) => {
  const {
    attributes, setAttributes,
  } = props;

  const content = (
    <div>
      <HierarchyImport
        attributes={attributes}
        setAttributes={setAttributes}
      />
    </div>
  );
  return content;
};
export default AnonymizeWrapper;
