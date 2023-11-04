import React, { useState } from 'react'
import CreateRule from './CreateRule';
import Rule from '../../data/Rule';

const SelectorList = (props:{rules:Rule[], selectedRules:Rule[], onRuleSelect:(e:React.MouseEvent<HTMLLIElement>, selector:String)=>{}, dispatch:({})=>{}}) => {

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
            <ul className = "floatful--selector-list">
                {props.rules.map((rule:Rule) => (
					<li 
                        className = "floatful--selector"
						key = {rule.selector}
                        onClick={(e) => {props.onRuleSelect(e, rule.selector)}}
					>
						{rule.selector}
					</li>
                ))}
            </ul>
            <button className = "floatful--clickable" onClick={() => {toggleCreateRuleModal(!createRuleModalStatus)}}>+</button>
        </div>
    );
}

export default SelectorList;