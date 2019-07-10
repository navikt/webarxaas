import React from 'react';

const MoreInfo = (props) => {
  const { showMoreInfo } = props;

  let content = '';

  if (showMoreInfo) {
    content = (
      <div className="more-info-content">
        <h1>To display Æ, Ø, and Å, make sure the dataset is saved as a CSV file with UTF-8</h1>

        <div className="more-info-attribute">
          <p>Attribute types</p>
          <li>Identifying attributes will be removed from the dataset.</li>
          <li>Quasi-identifying attributes will be transformed.</li>
          <li>
            Sensitive attributes will be kept as-is but they can
            be protected using privacy models, such as t-closeness or l-diversity.
          </li>
          <li>Insensitive attributes will be kept unmodified.</li>
        </div>
      </div>
    );
  }

  return content;
};

export default MoreInfo;
