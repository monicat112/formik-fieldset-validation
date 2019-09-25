export const baseValueData = [
  { name: "value1", label: "Value One", id: 1 },
  { name: "value2", label: "Value Two", id: 2 },
  { name: "value3", label: "Value Three", id: 3 },
  { name: "value4", label: "Value Four", id: 4 },
  { name: "value5", label: "Value Five", id: 5 },
  { name: "value6", label: "Value Six", id: 6 },
  { name: "value7", label: "Value Seven", id: 7 }
];

const getFormikData = arr => {
  let newObj;
  arr.forEach(val => {
    newObj = {
      ...newObj,
      [val.name]: ""
    };
  });
  return newObj;
};

export const valueDataFormik = getFormikData(baseValueData);
