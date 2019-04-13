import OPopup from './src'

OPopup.install = function (Vue) {
    Vue.component(OPopup.name, OPopup)
}

export default OPopup