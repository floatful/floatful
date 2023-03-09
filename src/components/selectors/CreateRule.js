import React, {useState} from 'react'
import { ACTIONS } from '../../reducers/rules';

const CreateRule = ({dispatch, onClose}) => {

	const [selector, setSelector] = useState('');
	const [element, setElement] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: ACTIONS.RULE.ADD,
			payload: {
				selector:selector,
				element:element,
				properties:[]
			}
		});
		onClose(false);
	}

  	return (
    	<div className="floatful--modal-create-rule">
			
			<h2>Create a New CSS Rule</h2>

        	<form onSubmit = {handleSubmit}>
				<label htmlFor="selectorInput">Selector</label>
				<input type = "text" id="selectorInput" placeholder = ".class"
					onChange={(e) => {setSelector(e.target.value)}}
				/>

				<label htmlFor='elementInput'>Element</label>
				<input type="text" id="elementInput" placeholder ="div"
					onChange={(e)=>{setElement(e.target.value)}}
				/>

				<p>More Options Coming soon, like:</p>
				<ul>
					<li>Custom, reusable property groups</li>
					<li>Breakpoint-specific properties</li>
					<li>And More!</li>
				</ul>

				<input type="button" value="Cancel"
					onClick={() => {onClose(false)}}
				/>
				<input type="submit" value="Submit"/>
			</form>

    	</div>
  	)
}

export default CreateRule