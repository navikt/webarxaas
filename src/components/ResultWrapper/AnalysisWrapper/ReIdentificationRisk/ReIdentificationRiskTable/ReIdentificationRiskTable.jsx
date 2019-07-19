import React from 'react';
import toPercent from '../../../../../util/ratioToPercent';

const ReIdentificationRiskTable = (props) => {
  const { reIdentificationRisk } = props;
  const content = (
    <div>
      <h3>Reidentification Risk</h3>
      <div align="left">
        <table className="table table-hover">
          <tbody>
            <p><b>Prosecutor model: </b></p>

            <tr>
              <td>Estimated prosecutor risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.estimated_prosecutor_risk)
                }
              </td>
            </tr>
            <tr>
              <td>Average prosecutor risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.average_prosecutor_risk)
                }
              </td>
            </tr>
            <tr>
              <td>Highest prosecutor risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.highest_prosecutor_risk)
                }
              </td>
            </tr>
            <tr>
              <td>Records affected by highest prosecutor risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures
                    .records_affected_by_highest_prosecutor_risk)
                }
              </td>
            </tr>
            <tr>
              <td>Prosecutor attacker success rate: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.attackerSuccessRate.successRates
                    .Prosecutor_attacker_success_rate)
                }
              </td>
            </tr>

            <br />
            <p><b>Journalist model: </b></p>
            <tr>
              <td>Estimated journalist risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.estimated_journalist_risk)
                }
              </td>
            </tr>
            <tr>
              <td>Journalist attacker success rate: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.attackerSuccessRate.successRates
                    .Journalist_attacker_success_rate)
                }
              </td>
            </tr>
            <tr>
              <td>Highest journalist risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures
                    .highest_journalist_risk)
                }
              </td>
            </tr>
            <tr>
              <td>Records affected by highest journalist risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures
                    .records_affected_by_highest_journalist_risk)
                }
              </td>
            </tr>

            <br />
            <p><b>Marketer model: </b></p>
            <tr>
              <td>Estimated marketer risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.estimated_marketer_risk)
                }
              </td>
            </tr>
            <tr>
              <td>Marketer attacker success rate: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.attackerSuccessRate.successRates
                    .Marketer_attacker_success_rate)
                }
              </td>
            </tr>

            <br />
            <p><b>Population: </b></p>

            <tr>
              <td>Population uniques: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures
                    .population_uniques)
                }
              </td>
            </tr>

            <tr>
              <td>Population model: </td>
              <td>{reIdentificationRisk.populationModel}</td>
            </tr>

            <br />
            <p><b>Lowest risk</b></p>
            <tr>
              <td>Lowest risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.lowest_risk)
                }
              </td>
            </tr>
            <tr>
              <td>Records affected by lowest risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.records_affected_by_lowest_risk)
                }
              </td>
            </tr>

            <br />
            <tr>
              <td><b>Sample uniques: </b></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.sample_uniques)
                }
              </td>
            </tr>

            <br />
            <tr>
              <td><b>Quasi-identifiers: </b></td>
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
