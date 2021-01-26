import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/on-off/OnOff";
import UnControlledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";

function App() {
    return (
        <div className={"App"}>
            <OnOff/>
            <PageTitle title={'This is APP Title'}/>
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <UnControlledAccordion titleValue={"New"}/>
            <UnControlledAccordion titleValue={"Feature"}/>
            <UncontrolledRating />
            <UncontrolledRating />
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
