import React from 'react'

function handleSubmit(e) {
    e.preventDefault();
    alert('Trying to add selector');
}

const SelectorForm = (props) => {
  return (
    <form id = "addSelectorForm" onSubmit={(e)=>{handleSubmit(e)}}>
        <input 
          type = "text"
          id = "addSelectorInput"
          className = "selector-input"
        />
        <button type = "submit">
          +
        </button>
      </form>
  )
}

export default SelectorForm