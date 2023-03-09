import React, { useState } from 'react'
import CreateRule from './CreateRule';

const SelectorList = ({rules, onRuleSelect, dispatch}) => {

    const [createRuleModalStatus, setCreateRuleModalStatus] = useState(false);

    const toggleCreateRuleModal = (bool) => {
        if(bool !== createRuleModalStatus)
            setCreateRuleModalStatus(bool);
    }

    const handleRuleClick = (rule) => {
        onRuleSelect(rule.selector);
    };

    return (
        <>
            {console.log(createRuleModalStatus)}
            {createRuleModalStatus && <CreateRule dispatch={dispatch}/>
            }
            <div>Selectors</div>
            <ul className = "floatful--selectors">
                {rules.map((rule) => (
					<li 
                        className = "floatful--selector"
						key = {rule.selector}
                        onClick={() => handleRuleClick(rule)}
					>
						Element: {rule.selector}
					</li>
                ))}
            </ul>
            <p className = "floatful--clickable" onClick={() => {toggleCreateRuleModal(true)}}>+</p>
        </>
    );
}

export default SelectorList