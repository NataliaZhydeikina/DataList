import React from 'react';

import './Data.less';

const Data = React.createClass({
    render() {
        const style = { backgroundColor: this.props.color };

        return (
            <div className='Data' style={style}>
                <span className='Data__del-icon' onClick={this.props.onDelete}> × </span>
                <h4 className='Data__name'>{this.props.name}</h4>
                <div className='Data__description'>{this.props.children}</div>
            </div>
        );
    }
});

export default Data;
/* {
                    this.props.name
                    ?
                        <h4 className='Data__name'>{this.props.name}</h4>
                    :
                        null
                }*/