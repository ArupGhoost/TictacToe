import React from 'react'

const Square = (props) => {
    const classes = props.className ? `${props.className} styling-x`  : 'styling-x';
    return (
        <>
            <span className={classes} onClick={props.onClick}>
                {props.state}
            </span>
        </>
    )
}

const Zero = () =>{
    return(
        <>
          <span style={{color:'white'}}>O</span>
        </>
    )
}
export default Square;
export {Zero};
