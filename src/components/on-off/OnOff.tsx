import React from "react";
type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}
function OnOff(props: OnOffPropsType) {
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
        background: props.on ? 'green' : 'white',
        cursor: 'pointer'
    };
    const offStyle = {
        ...onStyle,
        background: props.on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: props.on ? 'green' : 'red'
    };

    return (
        <div style={onOffWrapperStyle}>
            <div style={onStyle} onClick={() => props.setOn(true)}>ON</div>
            <div style={offStyle} onClick={() => props.setOn(false)}>OFF</div>
            <div style={indicatorStyle}/>
        </div>
    )
}

export default OnOff;