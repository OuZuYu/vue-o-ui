import OPicker from './picker'
import OOption from './option'
import OIcon from './icon'
import OPopup from './popup'
import OLoading from './loading'
import OStep from './step'
import OSteps from './steps'

const components = [
    OPicker,
    OOption,
    OIcon,
    OPopup,
    OLoading,
    OStep,
    OSteps
]

const install = function (Vue) {
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    OOption,
    OPicker,
    OIcon,
    OPopup,
    OLoading,
    OStep,
    OSteps
}