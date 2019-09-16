import React from 'react'
import './regular-error.css'
function RegularError(){
    return(
        <div className="Centro">
            <h1 style={{color:'white'}}>
                Esto explotó, intenta más tarde
            </h1>
            <img src="../../../images/error.gif" style={{width:'500px'}}/>
        </div>
    )
}

export default RegularError