import React, { useState } from "react"
import Make from './Make'

function Page() {
        const [todos, setlists] = useState([])
      return (
        <div> 
        <h2>Goal keeper </h2>
        
        <Make />
         {
            todos.length === 0 
            ?   
            <div><h2>No record</h2></div>   
            : 
            todos.map(task =>
            (
              <div>
                  {task}
              </div>
            )
            )
            }
        </div>
      )
}

export default Page