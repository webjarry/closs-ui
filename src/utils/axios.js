import axios from 'axios';
import { Toast } from "vant";

const instance = axios.create({
    timeout: 1000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});

/**
 * 发送拦截
 * */
instance.interceptors.request.use(
    config => {
        config.data = JSON.stringify(config.data);

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
                Toast('错误请求')
                break;
            case 401:
                Toast('未授权，请重新登录')
                break;
            case 403:
                Toast('拒绝访问')
                break;
            case 404:
                Toast('请求错误,未找到该资源')
                break;
            case 405:
                Toast('请求方法未允许')
                break;
            case 408:
                Toast('请求超时')
                break;
            case 500:
                Toast('服务器端出错')
                break;
            case 501:
                Toast('网络未实现')
                break;
            case 502:
                Toast('网络错误')
                break;
            case 503:
                Toast('服务不可用')
                break;
            case 504:
                Toast('网络超时')
                break;
            case 505:
                Toast('http版本不支持该请求')
                break;
            default:
                Toast(`连接错误${err.response.status}`)
        }
    } else {
        Toast('连接到服务器失败')
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

export function post(url, data = {}) {
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
