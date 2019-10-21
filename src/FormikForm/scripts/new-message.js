export default value => {
  const rand = Math.floor(Math.random() * Math.floor(3));
  if (rand > 1) {
    return `${value} is your number? Weird.`;
  }
  return `${value} is a great number!`;
};
