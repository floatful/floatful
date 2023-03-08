import React from 'react'

const SelectorList = ({rules, onRuleSelect}) => {

    const handleRuleClick = (rule) => {
        onRuleSelect(rule.selector);
    };

    return (
        <>
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
        </>
    );
}

export default SelectorList