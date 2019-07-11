import React from 'react';

const MoreInfo = (props) => {
  const { showMoreInfo } = props;

  let content = '';

  if (showMoreInfo) {
    content = (
      <div className="more-info">
        <h1>Information</h1>

        <div className="more-info-attribute">
          <p><b>CSV import file:</b></p>
          <p>
          To display Æ, Ø, and Å, make sure the imported dataset is saved as a CSV file with UTF-8
          </p>
         
          <p><b>Attribute types:</b></p>
          <li>
            <b>Identifying </b>
               attributes will be removed from the dataset.
          </li>
          <li>
            <b>Quasi-identifying </b>
            attributes will be transformed.
          </li>
          <li>
            <b>Sensitive </b>
          attributes will be kept as-is but they can be protected using privacy models, such as t-closeness or l-diversity.
          </li>
          <li>
            <b>Insensitive </b>
            attributes will be kept unmodified.
          </li>
        </div>
      </div>
    );
  }

  return content;
};

export default MoreInfo;
