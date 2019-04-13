import OOption from '../picker/src/option'

OOption.install = function (Vue) {
    Vue.component(OOption.name, OOption)
}

export default OOption