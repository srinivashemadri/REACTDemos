import React from 'react'

const Hoc =(WrappedComponent)=> {
    const colors =['red','green','blue','black','orange','pink','yellow']
    const randomcolor = colors[Math.floor(Math.random()*6)]
    const classname = randomcolor +"-text"
    return(props)=>{
        return(
        <div className={classname}>
            <WrappedComponent {...props}/>
        </div>
        )
    }
}

export default Hoc;