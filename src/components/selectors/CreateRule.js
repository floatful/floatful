import React, {useState} from 'react'
import { ACTIONS } from '../../reducers/rules';

const CreateRule = ({dispatch, onClose}) => {

	const [selector, setSelector] = useState('');
	const [element, setElement] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		//alert("Submitted!");
		console.log("Submit");
		/*dispatch({
			type: ACTIONS.RULE.ADD,
			payload: {
				selector:selector,
				element:element,
				properties:[]
			}
		});*/
		onClose();
	}

  	return (
    	<div className="floatful--modal-create-rule">
			<h2>Create a New CSS Rule</h2>
        	<form onSubmit = {handleSubmit}>
				<label htmlFor="selectorInput">Selector</label>
				<input 
					type = "text"
					id="selectorInput"
					placeholder = ".class"
					readOnly
				/>
				<label htmlFor='elementInput'>Element</label>
				<input 
					type="text" 
					id="elementInput"
					placeholder ="div"
					readOnly
				/>
				<p>More Options Coming soon, like:</p>
				<ul>
					<li>Custom, reusable property groups</li>
					<li>Breakpoint-specific properties</li>
					<li>And More!</li>
				</ul>
				<input 
					type="submit" 
					value="Submit"
				/>
			</form>
    	</div>
  	)
}

export default CreateRule