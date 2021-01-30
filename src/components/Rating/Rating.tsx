import React from "react";

export type RatingValuesType =  0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValuesType
    setRatingValue: (vale: RatingValuesType) => void
}

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star value={1} setRatingValue={props.setRatingValue} selected={props.value > 0}/>
            <Star value={2} setRatingValue={props.setRatingValue} selected={props.value > 1}/>
            <Star value={3} setRatingValue={props.setRatingValue} selected={props.value > 2}/>
            <Star value={4} setRatingValue={props.setRatingValue} selected={props.value > 3}/>
            <Star value={5} setRatingValue={props.setRatingValue} selected={props.value > 4}/>
        </div>
    )
}

type StartPropsType = {
    value: RatingValuesType
    selected: boolean
    setRatingValue: (value: RatingValuesType) => void
}

function Star(props: StartPropsType) {
    return (
        <span onClick={()=>props.setRatingValue(props.value)}>
        {props.selected ? <b>star </b> : "star "}
        </span>
    )
}

export default Rating;