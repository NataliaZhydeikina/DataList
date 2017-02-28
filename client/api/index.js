import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listDatas() {
        return axios.get(`${apiPrefix}/datas`);
    },

    createData(data) {
        return axios.post(`${apiPrefix}/datas`, data);
    },

    deleteData(dataId) {
        return axios.delete(`${apiPrefix}/datas/${dataId}`);
    }
}
