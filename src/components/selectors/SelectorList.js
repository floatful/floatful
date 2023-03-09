import React, { useState } from 'react'
import CreateRule from './CreateRule';

const SelectorList = ({rules, selectedRules, onRuleSelect, dispatch}) => {

    const [createRuleModalStatus, setCreateRuleModalStatus] = useState(false);

    const toggleCreateRuleModal = (bool) => {
        if(bool !== createRuleModalStatus)
            setCreateRuleModalStatus(bool);
    }

    return (
        <div className = "floatful floatful--selectors">
            {createRuleModalStatus && <CreateRule dispatch={dispatch} onClose={toggleCreateRuleModal}/>}
            <h2>Rules</h2>
            <ul className = "floatful--selector-list">
                {rules.map((rule) => (
					<li 
                        className = "floatful--selector"
						key = {rule.selector}
                        onClick={(e) => {onRuleSelect(e, rule.selector)}}
					>
						{rule.selector}
					</li>
                ))}
            </ul>
            <button className = "floatful--clickable" onClick={() => {toggleCreateRuleModal(!createRuleModalStatus)}}>+</button>
        </div>
    );
}

export default SelectorList