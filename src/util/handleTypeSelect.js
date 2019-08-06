export default function HandleTypeSelect(target, field, index, attributes, setAttributes) {
  const newAttributes = [...attributes];
  const { value: selectedType } = target;
  newAttributes[index] = {
    ...attributes[index],
    field,
    attributeTypeModel: selectedType,
    hierarchy: null,
  };
  setAttributes(newAttributes);
}
