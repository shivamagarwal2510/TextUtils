import React from 'react'

export default function Alert(props) {
    let ConvertUcase = (word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.msg} alert-dismissible fade show`} role="alert">
            <strong>{ConvertUcase(props.alert.msg)}</strong> : {props.alert.type}
        </div>
    )
}

