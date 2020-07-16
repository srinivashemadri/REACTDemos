import React, {useState} from 'react';
import './App.css'
import Goallist from './components/Goallists/Goallist';
import Newgoal from './components/NewGoal/Newgoal';


function App() {
  const [coursegoals, setCourseGoals] = useState([
    {id: 'cg1', text: "Hemadri"},
    {id: 'cg2', text: "Sai"},
    {id: 'cg3', text: "Srinivasa "},
    {id: 'cg4', text: "Preetham"},
  ]);
  

  const onaddgoal = (newgoal) => {
    //setCourseGoals(coursegoals.concat(newgoal));  -> naive approach

    //efficient approach
    setCourseGoals((prevcoursegoals)=>{
      return prevcoursegoals.concat(newgoal);

    });
  }
  return (
    <div>
      <h2 className="header">Course Goals</h2>
      <Newgoal addagoal = {onaddgoal} />
      <Goallist goals = {coursegoals}/>
    </div>
    
  );
}

export default App;
