const app = [
  'tests/app/**/*.feature',
  '--require-module ts-node/register',
  '--require tests/step_definitions/**/*.steps.ts'
].join(' ');

module.exports = {
  default: app
};
