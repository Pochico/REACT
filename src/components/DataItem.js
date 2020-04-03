import React from 'react'

const DataItem = ({number, title}) => (
    <div>
        <h3>{title} <span className='number'>{number}</span></h3>
    </div>
)

export default DataItem