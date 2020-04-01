const greeting = require('@zeit-now-monorepo/shared');
console.log(greeting.hello('World'));
module.exports = (req, res) => {
  res.end(greeting.hello('World'));
};
