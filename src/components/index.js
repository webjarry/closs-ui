import Vue from 'vue';
import '../../lib/rem';
import '../../lib/directive';
import '../assets/less/Common.less';
import ClsButton from "./ClsButton";
import ClsViews from "./ClsViews";
import ClsTabBar from "./ClsTabBar";

const Components = {
    ClsButton,
    ClsViews,
    ClsTabBar
};

Object.keys(Components).forEach( name => {
    Vue.component(name, Components[name])
} )

export default Components