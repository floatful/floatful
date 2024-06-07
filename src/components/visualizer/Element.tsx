import React from 'react'

const Element = (props:{data:string}) => {
  return (
    <> {React.createElement(props.data, {}, "Element")}
    </>
  )
}

export default Element