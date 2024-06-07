import React from 'react'
import Rule from '../../data/Rule'

const Selector = (props:{rule:Rule}) => {
    const rule = props.rule;
    return (
        <li className = "floatful--selector">{rule.selector}
            {rule.children.length !== 0 && 
                <ul>
                    {rule.children.map((child:Rule) => (
                        <Selector key={child.selector} rule={child}/>
                    ))}
                </ul>
            }
        </li>
    )
}

export default Selector