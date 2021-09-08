const axios = require("axios");
const apiBaseUrl = "http://localhost:3001/";

export class Http {
    static post(path: string, data?: any) {
        return axios.post(`${apiBaseUrl}${path}`, data);
    }
    static get(path: string, data?: any): Promise<any> {
        return axios.get(`${apiBaseUrl}${path}`, data);
    }
    static put(path: string, data: any) {
        return axios.put(`${apiBaseUrl}${path}`, data);
    }

    static delete(path: string, data?: any) {
        return axios.delete(`${apiBaseUrl}${path}`, data);
    }
}
