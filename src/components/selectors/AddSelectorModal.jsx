import React from 'react'

const AddSelectorModal = (props) => {
  return (
    <div className="floatful-modal">
        <div>AddSelectorModal</div>
        <button onClick={()=>props.onExit()}>Exit</button>
    </div>
  )
}

export default AddSelectorModal