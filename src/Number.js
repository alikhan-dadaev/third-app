import React from 'react';

function Number(props) {
    return (
        <div className="numberBlock">
            {props.counter}
        </div>
    );
}

export default Number;