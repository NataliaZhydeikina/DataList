import React from 'react';
import Data from './Data.jsx';

import Masonry from 'react-masonry-component';

import './DatasGrid.less';

const DatasGrid = React.createClass({
    render() {
        const masonryOptions = {
            itemSelector: '.Data',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };

        return (
            <Masonry
                className='DatasGrid'
                options={masonryOptions}
            >
                {
                    this.props.datas.map(data =>
                        <Data
                            key={data.id}
                            name={data.name}
                            onDelete={this.props.onDataDelete.bind(null, data)}
                            color={data.color}
                        >
                            {data.description}
                        </Data>
                    )
                }
            </Masonry>
        );
    }
});

export default DatasGrid;
