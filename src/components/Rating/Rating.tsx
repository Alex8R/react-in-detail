import React
    from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

type StartPropsType = {
    selected: boolean
}

function Star(props: StartPropsType) {
    return props.selected ?
        <span><b>star </b></span> :
        <span>star </span>
}

export default Rating;