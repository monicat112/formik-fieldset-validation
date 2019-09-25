export default value => {
  const rand = Math.floor(Math.random() * Math.floor(2));
  if (rand > 0) {
    return `${value}? That's your number? Weird.`;
  }
  return `${value} is a great number!`;
};
