export default function HandleTypeSelect(target, field, index, attributes, setAttributes) {
  const { value: selectedType } = target;
  console.log(field);
  // eslint-disable-next-line no-param-reassign
  attributes[index] = {
    ...attributes[index],
    field,
    attributeTypeModel: selectedType,
  };
  setAttributes(attributes);
}
