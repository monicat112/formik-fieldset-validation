const convertValuesToString = values => {
  const sortedObjKeys = Object.keys(values)
    // formik won't necessarily keeep the values in order, so re-order them
    .sort()
    // only use the value fields
    .filter(key => key.includes("value"));

  // create the string
  const string = sortedObjKeys.reduce((result, key) => {
    result += values[key];
    return result;
    // "" tells reduce to start on the first value
  }, "");

  return string;
};

export default convertValuesToString;
