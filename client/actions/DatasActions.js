import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const DataActions = {
    loadDatas() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_DATAS_REQUEST
        });

        api.listDatas()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_DATAS_SUCCESS,
                datas: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_DATAS_FAIL,
                error: err
            })
        );
    },

    createData(data) {
        api.createData(data)
        .then(() =>
            this.loadDatas()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deleteData(dataId) {
        api.deleteData(dataId)
        .then(() =>
            this.loadDatas()
        )
        .catch(err =>
            console.error(err)
        );
    }
};

export default DataActions;
