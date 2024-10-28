import React, { useState } from "react";
import Create from './Create';
import './App.css';

function Home() {
    const [todos, setTodos] = useState([]);
    
    return (
        <div className="home"> 
            <h2>Keeper</h2>
            
            <Create />

            {todos.length === 0 

                ? <div><h2>No record</h2></div>  
                 
                : todos.map((todo, index) => (
                    <div key={index} className="todo">
                        {todo}
                    </div>
                ))
            }
        </div>
    );
}

export default Home;
