import React from 'react';
import HierarchyImport from './HierachyImport/HeirarchyImport';
import PrivacyModelManager from './PrivacyModel/PrivacyModelManager';
import PrivacyModelTable from './PrivacyModel/PrivacyModelTable';

const AnonymizeWrapper = (props) => {
  const {
    attributes, setAttributes,
    privacyModels, setPrivacyModels,
  } = props;

  const content = (
    <div>
      <div className="row">
        <div className="col-4">
          <HierarchyImport
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </div>
        <div className="col-4">
          <PrivacyModelManager privacyModels={privacyModels} setPrivacyModels={setPrivacyModels} />
          <PrivacyModelTable privacyModels={privacyModels} setPrivacyModels={setPrivacyModels} />
        </div>
      </div>
    </div>

  );
  return content;
};
export default AnonymizeWrapper;