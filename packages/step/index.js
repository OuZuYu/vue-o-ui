import OStep from '../steps/src/step'

OStep.install = function (Vue) {
    Vue.component(OStep.name, OStep)
}

export default OStep