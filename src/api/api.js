import axios from "axios";
const axiosInstance = axios.create();

axiosInstance.defaults.withCredentials = true; //允许携带cookie
axiosInstance.defaults.timeout = 25000; //超时时间
// axiosInstance.defaults.baseURL = "http://localhost:3000/"; //
export default {
    install: function(Vue) {
        //===============================axiosInstance请求钩子==========================================//
        axiosInstance.interceptors.request.use(
            config => {
                config.url = "/api" + config.url;
                return config;
            },
            err => {
                return Promise.reject(err);
            }
        );
        //===============================axiosInstance响应钩子=======================================//
        axiosInstance.interceptors.response.use(
            res => {
                if (res.data.code === undefined) {
                    return res.data;
                }
                return res.data;
            },
            err => {
                return Promise.reject(err);
            }
        );
        Vue.prototype.axios = axiosInstance;
    },
    axios: axiosInstance
};