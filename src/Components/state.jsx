import React, { useState }  from "react";

function State(){
    const [score,setScore] = useState(0); 
     
    return (
     
     <div>
        <h1> {score}</h1>
        <button onClick={()=>setScore(200)} className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white" >Change </button>
     </div>

   ) 

}
export default State;