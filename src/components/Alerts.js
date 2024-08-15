import React from 'react'

function Alerts(props) {

const capitalizeFirstLetter=(str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //const capitalizeFirstLetter=(str)=> {
   // const lower=str.toLowerCase();
  //  return lower.charAt(0).toUpperCase() + lower.slice(1);
 // }

 // const smallFirstLetter=(str)=> {
//    return str.charAt(0).toLowerCase() + str.slice(1).toUpperCase();
  //}

  return (
 props.alert &&   <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{capitalizeFirstLetter (props.alert.type)}</strong>: {props.alert.msg}
 {//props.alert?.type}: {props.alert?.msg    OR props.alert && in start 
 }

</div>
  );
}

export default Alerts
