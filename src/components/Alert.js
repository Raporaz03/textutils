import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
// first props.alert is evaluated if it is null then second part is not evaluated
// or if props.alert is not null the do second part of it.
<div style={{height:'50px'}}>
{props.alert &&  <div>
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong> :    {props.alert.msg}
    </div>
</div>}
</div>
  )
}

export default Alert
        
