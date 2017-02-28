import React from 'react';

import ColorPicker from './ColorPicker.jsx';

import './DataEditor.less';

const DataEditor = React.createClass({
    getInitialState() {
        return {
            name: '',
            description: '',
            color: '#FFFFFF'
        };
    },

    handleDescriptionChange(event) {
        this.setState({ description: event.target.value });
    },

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    },

    handleColorChange(color) {
        this.setState({ color });
    },

    handleDataAdd() {
        const newData = {
            name: this.state.name,
            description: this.state.description,
            color: this.state.color
        };

        this.props.onDataAdd(newData);
        this.setState({ description: '', name: '', color: '#FFFFFF' });
    },

    render() {
        return (
            <div className='DataEditor'>
                <input
                    type='text'
                    className='DataEditor__name'
                    placeholder='Enter name'
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <textarea
                    placeholder='Enter description'
                    rows={5}
                    className='DataEditor__description'
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                />
                <div className='DataEditor__footer'>
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />
                    <button
                        className='DataEditor__button'
                        disabled={!this.state.description || !this.state.name}
                        onClick={this.handleDataAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
});

export default DataEditor;
