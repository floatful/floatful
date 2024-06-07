import React, { useState } from 'react'
import CreateRule from './CreateRule';
import Rule from '../../data/Rule';
import { ACTIONS, Action } from '../../reducers/rulesReducer';
import Selector from './Selector';

const SelectorList = (props:{rules:Rule[], selectedRules:Rule[], onRuleSelect:(e:React.MouseEvent<HTMLLIElement>, selector:string)=>any, dispatch:React.Dispatch<Action>}) => {

    const [createRuleModalStatus, setCreateRuleModalStatus] = useState(false);

    const toggleCreateRuleModal:(close:boolean)=>{} = (close:boolean) => {
        if(close !== createRuleModalStatus)
            setCreateRuleModalStatus(close);
        return {};
    }

    return (
        <div className = "floatful floatful--selectors">
            {createRuleModalStatus && <CreateRule dispatch={props.dispatch} onClose={toggleCreateRuleModal}/>}
            <h2>Rules</h2>
            {/*
                Rules are organized as a nested list, each rule containing children 
                (ex. "div h1", in this case the parent rule is "div") creates a 
                sublist with all it's children (i.e. "h1").
            */}
            <ul className = "floatful--selector-list">
                {props.rules.map((rule:Rule) => (
                    <Selector key="rule.selector" rule={rule}/>
                ))}
            </ul>
            <button className = "floatful--clickable" onClick={() => {toggleCreateRuleModal(!createRuleModalStatus)}}>+</button>
        </div>
    );
}

export default SelectorList;