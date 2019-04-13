import OSteps from './src/steps'

OSteps.install = function (Vue) {
    Vue.component(OSteps.name, OSteps)
}

export default OSteps