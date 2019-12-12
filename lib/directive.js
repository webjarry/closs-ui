import Vue from 'vue'

let order = {
    'x': {
        bind: function (el) {
            let isPhonex = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896 || /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 896 || /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812;

            isPhonex ? el.style.paddingBottom = '0.24rem' : null
            // isPhonex ? el.style.borderBottom = '0.21rem solid red' : null
        }
    }
};

Object.keys(order).forEach( key => {
    Vue.directive(key, order[key]);
});
