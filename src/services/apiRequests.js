import axios from 'axios';
import AppConfig from '../config/config.js';

const getData = (query = '') => {
    const dataUrl = AppConfig.productsUrl;
    return axios.get(dataUrl + query);
}

export default getData;