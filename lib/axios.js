import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://47.103.48.171:8000/gw/m/n',
    timeout: 1000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * 发送拦截
 * */
instance.interceptors.request.use(
    config => {
        let token = localStorage.getItem('token'),
            isToken = token === null ? null : token;

        if (isToken !== null) {
            config.headers = {
                'token': token
            };
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
 * 响应拦截
 * */
instance.interceptors.response.use(response => {
    return response
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                window.console.log('错误请求')
                break;
            case 401:
                window.console.log('未授权，请重新登录')
                break;
            case 403:
                window.console.log('拒绝访问')
                break;
            case 404:
                window.console.log('请求错误,未找到该资源')
                break;
            case 405:
                window.console.log('请求方法未允许')
                break;
            case 408:
                window.console.log('请求超时')
                break;
            case 500:
                window.console.log('服务器端出错')
                break;
            case 501:
                window.console.log('网络未实现')
                break;
            case 502:
                window.console.log('网络错误')
                break;
            case 503:
                window.console.log('服务不可用')
                break;
            case 504:
                window.console.log('网络超时')
                break;
            case 505:
                window.console.log('http版本不支持该请求')
                break;
            default:
                window.console.log(`连接错误${err.response.status}`)
        }
    } else {
        window.console.log('连接到服务器失败')
    }
    return Promise.resolve(err.response)
})


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
    return new Promise((resolve, reject) => {
        instance.post(url, data)
            .then(response => {
                try {
                    resolve(response.data);
                } catch (e) {
                    resolve(null)
                }
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}
