import React from 'react';
import UserActionWrapper from '../UserActionsWrapper';
import UserActionsTab from '../UserActionsTab/UserActionsTab';
import { shallow } from '../../../enzyme';

describe('Test for UserActionsWrapper', () => {
  let wrapper;
  let testDataset;
  let testDatasetFile;
  let testAttributes;
  const setTestAttributes = (newTestAttributes) => {
    testAttributes = newTestAttributes;
  };

  beforeAll(() => {
    testDatasetFile = new Blob();
    testAttributes = [{ name: 'test1' }, { name: 'test2' }];
    testDataset = [['test1', 'test2'], ['test3', 'test4']];
    wrapper = shallow(<UserActionWrapper
      dataset={testDataset}
      datasetFile={testDatasetFile}
      attributes={testAttributes}
      endpoint="testendpoint.local"
      fileName="testFileName"
      setAttributes={setTestAttributes}
    />);
  });

  it('Render test for UserActionsWrapper', () => {
    expect(wrapper.find(UserActionsTab).length).toEqual(1);
  });
});
