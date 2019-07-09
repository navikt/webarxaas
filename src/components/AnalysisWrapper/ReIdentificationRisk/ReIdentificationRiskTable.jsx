import React from 'react';
import 'react-table/react-table.css';

const ReIdentificationRiskTable = (props) => {
  const { reIdentificationRisk } = props;

  const toPercent = (ratio) => {
    const percent = 100;
    const percentString = ' %';
    return (ratio * percent).toFixed(2) + percentString;
  };

  const content = (
    <div>
      <h3>Reidentification Risk</h3>
      <div align="left">
        <table className="table table-hover">
          <tbody>
            <tr>
              <td><b>Lowest risk: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.lowest_risk)
                }
              </td>
            </tr>
            <tr>
              <td><b>Records affected by lowest risk: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.records_affected_by_lowest_risk)
                }
              </td>
            </tr>
            <tr>
              <td><b>Average prosecutor risk: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.average_prosecutor_risk)
                }
              </td>
            </tr>
            <tr>
              <td><b>Highest prosecutor risk: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.highest_prosecutor_risk)
                }
              </td>
            </tr>
            <tr>
              <td><b>Records affected by highest prosecutor risk: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures
                    .records_affected_by_highest_prosecutor_risk)
                }
              </td>
            </tr>
            <tr>
              <td><b>Prosecutor attacker success rate: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.attackerSuccessRate.successRates
                    .Prosecutor_attacker_success_rate)
                }
              </td>
            </tr>
            <tr>
              <td><b>Highest journalist risk: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures
                    .highest_journalist_risk)
                }
              </td>
            </tr>
            <tr>
              <td><b>Records affected by highest journalist risk: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures
                    .records_affected_by_highest_journalist_risk)
                }
              </td>
            </tr>
            <tr>
              <td><b>Journalist attacker success rate: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.attackerSuccessRate.successRates
                    .Journalist_attacker_success_rate)
                }
              </td>
            </tr>
            <tr>
              <td><b>Marketer attacker success rate: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.attackerSuccessRate.successRates
                    .Marketer_attacker_success_rate)
                }
              </td>
            </tr>
            <tr>
              <td><b>Estimated prosecutor risk: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.estimated_prosecutor_risk)
                }
              </td>
            </tr>
            <tr>
              <td><b>Estimated journalist risk: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.estimated_journalist_risk)
                }
              </td>
            </tr>
            <tr>
              <td><b>Estimated marketer risk: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.estimated_marketer_risk)
                }
              </td>
            </tr>
            <tr>
              <td><b>Sample uniques: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.sample_uniques)
                }
              </td>
            </tr>
            <tr>
              <td><b>population uniques: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures
                    .population_uniques)
                }
              </td>
            </tr>
            <tr>
              <td><b>Population model: </b></td>
              <td>{reIdentificationRisk.populationModel}</td>
            </tr>
            <tr>
              <td><b>Quasi-identifiers</b></td>
              <td>
                {reIdentificationRisk.quasiIdentifiers.map(attribute => attribute.concat(', '))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  return content;
};

export default ReIdentificationRiskTable;
