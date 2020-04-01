const greeting = require('@zeit-now-monorepo/shared');
console.log(greeting.hello('Universe'));
module.exports = (req, res) => {
  res.end(greeting.hello('Universe'));
};
