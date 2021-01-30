import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValuesType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledOnOff from "./components/on-off/UncontrolledOnOff";
import UnControlledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import OnOff from "./components/on-off/OnOff";


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValuesType>(3)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState<boolean>(false);

    return (
        <div className={"App"}>
            <PageTitle title={'This is APP Title'}/>
            <UncontrolledOnOff/>
            <OnOff
                on={on}
                setOn={setOn}/>
            <Rating
                value={ratingValue}
                setRatingValue={setRatingValue}/>
            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                setCollapsed={setAccordionCollapsed}/>
            <UnControlledAccordion titleValue={"New"}/>
            <UncontrolledRating />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    );
}

export default App;
