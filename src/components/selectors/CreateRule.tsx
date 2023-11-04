import React, {useState} from 'react'
import { ACTIONS } from '../../reducers/rulesReducer';

const CreateRule = (props:{dispatch:({})=>{}, onClose:(close:boolean)=>{}}) => {

	const [selector, setSelector] = useState('');
	const [element, setElement] = useState('');

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.dispatch({
			type: ACTIONS.ADD_RULE,
			payload: {
				selector:selector,
				element:element,
				properties:[]
			}
		});
		props.onClose(false);
	}

  	return (
    	<div className="floatful--modal floatful--modal-create-rule">
			
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
					onClick={() => {props.onClose(false)}}
				/>
				<input type="submit" value="Submit"/>
			</form>

    	</div>
  	)
}

export default CreateRule