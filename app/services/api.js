import axios from 'axios';

const BASE_URL = 'http://192.168.1.186:1337/api';
const API_KEY =
    '7eda5c1826f7ed457aecc0b03caf881f4006dc939a2264d8e94942ad9ee8a76a7b1e34648522f7cb0120ea140323ca9e6dc0bcb3ea4127740920972311de842353824d66d0d65bd31826d0e0cff4f814e8526292999c60e533ec2defc96e74e92a3698f35f2252d450be8f09705cf187d50eb97d98cf2bed248b639def24e3f1';

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: 'Bearer ' + API_KEY,
    },
});

const getSlider = () => AxiosInstance.get('/sliders?populate=*');

export default {
    getSlider,
};
