import React from 'react';
import toPercent from '../../../../../../util/ratioToPercent';
import './__css__/ReIdentificationRiskTable.css';
import ProsecutorModelHelpText from './ReidentifcationRiskTableHelpText/ProsecutorModelHelpText';
import JournalistModelHelpText from './ReidentifcationRiskTableHelpText/JournalistModelHelpText';
import SampleUniquesHelpText from './ReidentifcationRiskTableHelpText/SampleUniquesHelpText';
import HelpText from '../../../../../HelpTextWrapper/HelpText';

const dialogTitleMarketerModel = 'Marketer model:';

const dialogContentMarketerModel = (
  <div>
    <p>
      In the marketer model the attacker does not target a specific individual but aims at
       re-identifying a high number of individuals. An attack can therefore only be considered
        successful if a larger fraction of the records could be re-identified.
    </p>
  </div>
);

const dialogTitlePopulation = 'Population:';

const dialogContentPopulation = (
  <div>
    <p>
      The
      {' '}
      <b>population uniqueness </b>
      privacy model aims at protecting datasets from re-identification
       in the marketer model by enforcing thresholds on the proportion of records
        that are unique within the underlying population. For this purpose, basic
         information about the population has to be specified. Based on this data,
          statistical super-population models are used to estimate characteristics
           of the overall population with probability distributions that are
            parameterized with sample characteristics.
    </p>
    <br />
    <p>The supported models are PITMAIN and SNB.</p>
  </div>
);

const dialogTitleLowestRisk = 'Lowest Risk:';

const dialogContentLowestRisk = (
  <div>
    <p>
      <b>Lowest risk </b>
      displays the lowest risk in the dataset.
      <br />
      <b>
        Records affected by lowest risk
        {' '}
      </b>
      displays the percentage of records with the lowest risk.
    </p>
  </div>
);

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
                <HelpText
                  dialogTitle={dialogTitleMarketerModel}
                  dialogContent={dialogContentMarketerModel}
                />
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
                <HelpText
                  dialogTitle={dialogTitlePopulation}
                  dialogContent={dialogContentPopulation}
                />
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
                <HelpText
                  dialogTitle={dialogTitleLowestRisk}
                  dialogContent={dialogContentLowestRisk}
                />
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
