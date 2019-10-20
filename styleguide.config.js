const glob = require('glob')

module.exports = {
  components: 'packages/**/*.vue',
  exampleMode: 'expand',
  usageMode: 'expand',
  pagePerSection: true,
  ignore: [
    '**/packages/picker/src/option.vue',
    '**/packages/steps/src/step.vue'
  ]
};