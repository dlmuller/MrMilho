import React from 'react';
import Item from './item';

const Hunt = ({ info }) => {
    return (
        <div className='huntDisplay'>
            <div className='analyzerInputsContainer'>
                {info.map((item) => <Item item={item} />)}

                <div className='hoursAnalyzer'>
                    <label > Hours </label>
                    <input type="text" />
                    <button>Calculate</button>
                </div>
            </div>
            <div className='resultsContainer'>
                <div className='totalResultsAnalyzer'>
                    Total Money / item
                    {info.map((item) => <Item item={item} />)}
                </div>
                <div className='hourlyResultsAnalyzer'>
                    Money/hr
                </div>
            </div>
        </div>
    );
}

export default Hunt;