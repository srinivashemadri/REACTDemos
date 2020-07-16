import React from 'react';

const Goallist=(props)=>{
    return(
        <div className="goal-list">
            {
                props.goals.map( (goal) => {
                    return <li key={goal.id}>{goal.text}</li>;
                })
            }

        </div>
        
    );
}

export default Goallist;