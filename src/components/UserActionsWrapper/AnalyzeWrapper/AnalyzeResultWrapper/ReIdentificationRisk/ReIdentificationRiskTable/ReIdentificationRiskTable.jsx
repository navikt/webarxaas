import React from 'react';
import toPercent from '../../../../../../util/ratioToPercent';
import './__css__/ReIdentificationRiskTable.css';
import ProsecutorModelHelpText from './ReidentifcationRiskTableHelpText/ProsecutorModelHelpText';
import JournalistModelHelpText from './ReidentifcationRiskTableHelpText/JournalistModelHelpText';
import PopulationHelpText from './ReidentifcationRiskTableHelpText/PopulationHelpText';
import MarketerModelHelpText from './ReidentifcationRiskTableHelpText/MarketerModelHelpText';
import SampleUniquesHelpText from './ReidentifcationRiskTableHelpText/SampleUniquesHelpText';
import LowestRiskHelpText from './ReidentifcationRiskTableHelpText/LowestRiskHelpText';

const ReIdentificationRiskTable = (props) => {
  const { reIdentificationRisk } = props;
  const content = (
    <div>
      <h3>Reidentification Risk</h3>
      <div align="left">
        <table className="re-identification-risk-table table table-hover">
          <tbody>
            <tr>
              <td><p><b>Prosecutor model: </b></p></td>
              <td>
                <ProsecutorModelHelpText />
              </td>
            </tr>
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
              <td className="last-element-of-group">Prosecutor attacker success rate: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.attackerSuccessRate.successRates
                    .Prosecutor_attacker_success_rate)
                }
              </td>
            </tr>

            <tr>
              <td><p><b>Journalist model: </b></p></td>
              <td>
                <JournalistModelHelpText />
              </td>
            </tr>
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
              <td className="last-element-of-group">Records affected by highest journalist risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures
                    .records_affected_by_highest_journalist_risk)
                }
              </td>
            </tr>

            <tr>
              <td><p><b>Marketer model: </b></p></td>
              <td>
                <MarketerModelHelpText />
              </td>
            </tr>
            <tr>
              <td>Estimated marketer risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.estimated_marketer_risk)
                }
              </td>
            </tr>
            <tr>
              <td className="last-element-of-group">Marketer attacker success rate: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.attackerSuccessRate.successRates
                    .Marketer_attacker_success_rate)
                }
              </td>
            </tr>

            <tr>
              <td><p><b>Population: </b></p></td>
              <td>
                <PopulationHelpText />
              </td>
            </tr>
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
              <td className="last-element-of-group">Population model: </td>
              <td>{reIdentificationRisk.populationModel}</td>
            </tr>

            <tr>
              <td><p><b>Lowest risk</b></p></td>
              <td>
                <LowestRiskHelpText />
              </td>
            </tr>

            <tr>
              <td>Lowest risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.lowest_risk)
                }
              </td>
            </tr>
            <tr>
              <td className="last-element-of-group">Records affected by lowest risk: </td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.records_affected_by_lowest_risk)
                }
              </td>
            </tr>
            <tr>
              <td><b>Sample Uniques: </b></td>
              <td>
                <SampleUniquesHelpText />
              </td>
            </tr>
            <tr>
              <td><p>Sample Uniques:</p></td>
              <td>
                {
                  toPercent(reIdentificationRisk.measures.sample_uniques)
                }
              </td>
            </tr>
            <tr>
              <td><b>Quasi-identifiers: </b></td>
              <td>
                {reIdentificationRisk.quasiIdentifiers.map((attribute) => attribute.concat(', '))}
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
