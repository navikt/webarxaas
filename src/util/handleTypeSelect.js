export default function HandleTypeSelect(target, field, index, attributes, setAttributes) {
  const { value: selectedType } = target;
  console.log(attributes);
  console.log(index);
  // eslint-disable-next-line no-param-reassign
  attributes[index] = {
    ...attributes[index],
    field,
    attributeTypeModel: selectedType,
  };
  const newAttributes = Object.assign([], attributes);
  console.log(newAttributes);
  setAttributes(newAttributes);
}

