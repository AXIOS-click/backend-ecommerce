// .huskyrc.js
module.exports = {
  hooks: {
    "pre-commit": "node scripts/create-readme",
  },
};
