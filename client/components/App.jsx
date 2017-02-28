import React from 'react';

import DatasStore from '../stores/DatasStore';
import DatasActions from '../actions/DatasActions';

import DataEditor from './DataEditor.jsx';
import DatasGrid from './DatasGrid.jsx';

import './App.less';

function getStateFromFlux() {
    return {
        isLoading: DatasStore.isLoading(),
        datas: DatasStore.getDatas()
    };
}

const App = React.createClass({
    getInitialState() {
        return getStateFromFlux();
    },

    componentWillMount() {
        DatasActions.loadDatas();
    },

    componentDidMount() {
        DatasStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        DatasStore.removeChangeListener(this._onChange);
    },

    handleDataDelete(data) {
        DatasActions.deleteData(data.id);
    },

    handleDataAdd(data) {
        DatasActions.createData(data);
    },

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>Data List</h2>
                <DataEditor onDataAdd={this.handleDataAdd} />
                <DatasGrid datas={this.state.datas} onDataDelete={this.handleDataDelete} />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;
