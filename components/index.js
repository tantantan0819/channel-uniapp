import VTab from './VTab'
import VLogin from './VLogin'


let ComponentCaches ={}

function registerCommonComponent(vue,name,Component,options = {}){
    if(!vue.prototype.$alert){
        vue.prototype.$alert = {}
    }
    vue.prototype.$alert[name] = function () {
        if (ComponentCaches[name]) {
            return ComponentCaches[name]
        }
        var componentClass = vue.extend(Component)
        var component = new componentClass(options).$mount()
        document.body.appendChild(component.$el)
        return ComponentCaches[name] = component
    }
}

export default {
    registerComponent: vue => {
        vue.component('v-tab', VTab);
		vue.component('v-login', VLogin)
        // registerCommonComponent(vue,'loading',Loading)
        // registerCommonComponent(vue,'tost',Tost)
    }
}