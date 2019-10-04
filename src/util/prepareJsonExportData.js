export default function prepareJsonExportData(riskProfile, attributes,
  privacyModels = null, suppressionLimit = null, attributeGeneralization = null) {
  const newAttributes = [];
  attributes.forEach((attribute) => {
    newAttributes.push(
      {
        field: attribute.field,
        attributeTypeModel: attribute.attributeTypeModel,
      },
    );
  });

  const newRiskProfile = {
    reIdentificationRisk: {
      measures: {
        records_affected_by_highest_prosecutor_risk: riskProfile.reIdentificationRisk
          .measures.records_affected_by_highest_prosecutor_risk,
        sample_uniques: riskProfile.reIdentificationRisk.measures.sample_uniques,
        lowest_risk: riskProfile.reIdentificationRisk.measures.lowest_risk,
        estimated_prosecutor_risk: riskProfile.reIdentificationRisk
          .measures.estimated_prosecutor_risk,
        records_affected_by_lowest_risk: riskProfile.reIdentificationRisk
          .measures.records_affected_by_lowest_risk,
        average_prosecutor_risk: riskProfile.reIdentificationRisk
          .measures.average_prosecutor_risk,
        highest_prosecutor_risk: riskProfile.reIdentificationRisk
          .measures.highest_prosecutor_risk,
      },
      attackerSuccessRate: {
        successRates: {
          Prosecutor_attacker_success_rate: riskProfile.reIdentificationRisk
            .attackerSuccessRate.successRates.Prosecutor_attacker_success_rate,
        },
      },
      quasiIdentifiers: riskProfile.reIdentificationRisk.quasiIdentifiers,
    },
    distributionOfRisk: riskProfile.distributionOfRisk,
    attributeRisk: riskProfile.attributeRisk,
  };

  return {
    attributeTypeUsed: newAttributes,
    privacyModelsUsed: privacyModels,
    suppressionLimitUsed: suppressionLimit / 100,
    attributeGeneralization,
    riskProfile: newRiskProfile,
  };
}
