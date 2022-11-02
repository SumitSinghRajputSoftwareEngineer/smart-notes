import React from "react";

function Alert(props) {
  const Type = (word) =>{
    if(word==='danger'){
      return "Error";
    }
    else{
      return "Success"
    }
  }
  return (
    <div>{props.alert &&
      <div
        style={{ height: "50px" }}
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
       <strong>{Type(props.alert.type)}</strong> : {props.alert.msg}
      </div>}
    </div>
  );
}

export default Alert;
