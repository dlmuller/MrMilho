import React from 'react'
import "../../styles/analyzer/analyzer.css"

const Item = ({ item }) => {

    const img = item.url
    const name = item.ItemName

    return (



        <div>

            <img src={img} alt="Failed to load img" className='itemImg' />

            <div>

                <input type="number" className='analyzerInputs' />
            </div>

        </div>



    );
}

export default Item;