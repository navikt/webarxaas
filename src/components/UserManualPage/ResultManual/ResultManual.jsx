import React from 'react';
import RiskMetrics from './ResultManualImages/RiskMetrics.png';
import RiskMetricsExpanded from './ResultManualImages/RiskMetricsExpanded.png';
import DistributionOfRisk from './ResultManualImages/DistributionOfRisk.png';
import MoreInformation from './ResultManualImages/MoreInformation.png';
import RiskInterval from './ResultManualImages/RiskInterval.png';
import AttributeRisk from './ResultManualImages/AttributeRisk.png';
import AttributeRiskList from './ResultManualImages/AttributeRiskList.png';
import './__css__/ResultManual.css';

const ResultManual = () => {
  const content = (
    <div className="result-manual">
      <p>
        In addition to the default displayed risk there are tree expandable
        panels with additional metrics and description of the different models.
      </p>
      <br />
      <p>Click the panel that you want to expand.</p>
      <div className="risk-metrics">
        <img src={RiskMetrics} alt="Risk Metrics" />
        <br />
        <br />
        <p><b>Risk Metrics:</b></p>
        <p>
          Clicking the Risk Metrics panel will display the
          Re-identification Risk of the different models.
        </p>
        <br />
        <p>For a description of the different models click the question mark.</p>
        <div className="risk-metrics-expanded-img">
          <img src={RiskMetricsExpanded} alt="Risk Metrics Expanded" />
        </div>
        <br />
        <br />
        <p><b>Distribution Of Risk:</b></p>
        <p>
          Clicking the Distribution Of Risk panel will
          display a graph with distribution of risk.
        </p>
        <div className="distribution-of-risk">
          <img src={DistributionOfRisk} alt="Distribution Of Risk" />
        </div>
        <br />
        <p>
          In this graph, the distribution of re-identification risk amongst the records
          of the dataset is displayed.
        </p>
        <ul>
          <li>
            <p>The X-axis displays the risk [from, to).</p>
          </li>
          <li>
            <p>The Y-axis displays the percentage of record affected by the risk.</p>
          </li>
        </ul>
        <br />
        <p>
          In addition to the graph there’s an expandable panel named More information.
        </p>
        <div className="more-information-img">
          <img src={MoreInformation} alt="More Information Panel" />
        </div>
        <br />
        <p>
          Clicking the More Information panel will display a list of the Risk
          Interval displayed in the graph.
        </p>
        <div className="risk-interval-img">
          <img src={RiskInterval} alt="Risk Interval" />
        </div>
        <br />
        <br />
        <p><b>Attribute Risk:</b></p>
        <p>
          Clicking the Attribute Risk panel will display a graph with risk
          associated with the quasi-identifying attributes.
        </p>
        <br />
        <div className="attribute-risk">
          <img src={AttributeRisk} alt="Attribute Risk" />
        </div>
        <br />
        <p>
          <b>Distinction</b>
          {' '}
          represents the ratio between the unique
          values for the quasi-identifiers and the total number of records.
        </p>
        <p>
          <b>Separation</b>
          {' '}
          represents the ratio between pairs of records with at least one
          different value for their quasi-identifiers, and the total number
          of ways that two different records can be paired. In general, a
          higher distinction and separation are indicators that the
          quasi-identifiers are more likely to re-identify a record.
        </p>
        <br />
        <ul>
          <li>
            <p>The X-axis displays the Quasi-identifying attributes.</p>
          </li>
          <li>
            <p>The Y-axis displays Distinction and Separation in percent.</p>
          </li>
        </ul>
        <br />
        <p>In addition to the graph there’s an expandable panel named More information.</p>
        <div className="more-information-img">
          <img src={MoreInformation} alt="More Information Panel" />
        </div>
        <br />
        <p>
          Clicking the More Information panel will display a list of the
          Attribute Risk displayed in the graph.
        </p>
        <div className="attribute-risk-list-img">
          <img src={AttributeRiskList} alt="Attribute Risk List" />
        </div>
      </div>
    </div>
  );
  return content;
};

export default ResultManual;
