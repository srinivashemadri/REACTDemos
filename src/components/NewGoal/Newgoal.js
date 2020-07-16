import React,{useState} from 'react';

const Newgoal = (props) => {

    const [enteredtext, updatetext] = useState('');

    const addgoalhandler =(event)=>{

        event.preventDefault();
        const newgoal ={
            id : Math.random().toString(),
            text : enteredtext
        }
        
        updatetext('');
        props.addagoal(newgoal);

    };

    const textchangehandler = (event) =>{

        updatetext(event.target.value);

    };

    
    return(
        <div> 
            <form onSubmit={addgoalhandler}>
                <input value= {enteredtext} onChange={textchangehandler} type="text" />
                <button type="submit" >Add Goal</button>
            
            </form>
        </div>
    );
    

}

export default Newgoal;