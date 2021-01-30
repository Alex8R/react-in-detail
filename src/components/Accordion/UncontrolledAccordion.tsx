import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UnControlledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={collapsed} setCollapsed={setCollapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 style={{cursor: "pointer"}} onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UnControlledAccordion;