import Vue from 'vue'
import ClsButton from "./ClsButton";

const Components = {
    ClsButton
};

Object.keys(Components).forEach( name => {
    Vue.component(name, Components[name])
} )

export default Components