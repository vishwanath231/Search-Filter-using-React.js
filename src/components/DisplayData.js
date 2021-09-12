import React from 'react';

const DisplayData = ({ item }) => {
    return (
        <div className="shadow-xl m-4 p-4 rounded">
            <div className="text-lg font-semibold">{item.name}</div>
            <div className="text-sm font-normal">{item.email}</div>
        </div>
    )
}

export default DisplayData;
