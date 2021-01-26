import React, {useState} from "react";

function OnOff() {
    const [on, setOn] = useState<boolean>(false);
    const onOffWrapperStyle = {
        display: 'flex',
        alignItems: 'center'
    };

    const onStyle = {
        width: '30px',
        height: '20px',
        padding: '2px',
        marginRight: '2px',
        border: '1px solid black',
        background: on ? 'green' : 'white',
        cursor: 'pointer'
    };

    const offStyle = {
        ...onStyle,
        background: on ? 'white' : 'red'
    };

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: on ? 'green' : 'red'
    };
    return (
        <div style={onOffWrapperStyle}>
            <div style={onStyle} onClick={() => setOn(true)}>ON</div>
            <div style={offStyle} onClick={() => setOn(false)}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;