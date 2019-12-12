/**
 * REM自适应
 * designWidth 设计稿实际宽度
 * maxWidth 制作稿的最大宽度
 */
let rem = {
    body: 750,
    font: '0.16rem'
};
//
// let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
//
// if (!flag) {
//     rem = {
//         body: 1920,
//         font: '0.16rem'
//     };
// } else {
//     rem = {
//         body: 750,
//         font: '0.25rem'
//     };
// }

((designWidth, maxWidth) => {
    const docEle = document.documentElement;
    // 设置viewport
    let meta;
    const viewportContent = 'width=device-width,initial-scale=1,maximum-scale=1.0,user-scalable=no,viewport-fit=cover';
    // viewport-fit=cover用于适配iphoneX
    meta = document.querySelector('meta[name=viewport]');
    if (meta) {
        meta.setAttribute('content', viewportContent);
    } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'viewport');
        meta.setAttribute('content', viewportContent);
        if (docEle.firstElementChild) {
            docEle.firstElementChild.appendChild(meta);
        } else {
            let div = document.createElement('div');
            div.appendChild(meta);
            document.write(div.innerHTML);
            div = null;
        }
    }

    // 创建REM样式
    const styleEle = document.createElement('style');
    if (docEle.firstElementChild) {
        docEle.firstElementChild.appendChild(styleEle);
    } else {
        let div = document.createElement('div');
        div.appendChild(styleEle);
        document.write(div.innerHTML);
        div = null;
    }

    // 等待viewport设置好后执行refreshRem
    const refreshRem = () => {
        let width = docEle.getBoundingClientRect().width;
        maxWidth = maxWidth || 540;
        // 限制在540的屏幕下，这样100%就跟10rem不一样了
        width > maxWidth && (width = maxWidth);

        const rem = width * 100 / designWidth;
        styleEle.innerHTML = 'html{font-size:' + rem + 'px !important;}';
    };
    refreshRem();

    // 事件监听
    let timeID;
    window.addEventListener('resize', () => {
        clearTimeout(timeID);
        // 防止执行两次
        timeID = setTimeout (refreshRem, 300);
    });
    window.addEventListener('pageshow', (evt) => {
        // 浏览器后退时重新计算
        if (evt.persisted) {
            clearTimeout(timeID);
            const w = window;
            timeID = setTimeout(w.refresh, 300);
        }
    }, false);

    // 事件监听
    const defaultFontSize = rem.font;

    const doc = document;

    if (doc.readState === 'complete') {
        doc.body.style.fontSize = defaultFontSize;
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            doc.body.style.fontSize = defaultFontSize;
        }, false);
    }
})(rem.body, rem.body);
