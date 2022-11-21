import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function List_content(){
    const nameToDos = [
        { title: "Her name is Lola", done: false, id: uuidv4() },
        { title: "She's a showgirl", done: false, id: uuidv4() },
        { title: "She has yellow feather in her hair", done: false, id: uuidv4() },
        { title: "She does the cha-cha", done: false, id: uuidv4() },
        { title: "She's got a Tony", done: false, id: uuidv4() },
    ];

    const [todos, setTodos] = useState(nameToDos);

    const handleChange = (id) => {
    const newTodo = todos.map((todo) => {
        if (todo.id === id) {
        todo.done = !todo.done;
        }
        return todo;
    });

    setTodos(newTodo);
    };
    return(
            <form className="Todo-list-container break-words text-justify">
                {todos.map((todo) => (
                <div key={todo.id} className="flex flex-row">
                    <input id={todo.id} value="Done" onChange={()=>{handleChange(todo.id)}}
                        type="checkbox" className="Todo-tickbox mx-1 my-1 "></input>
                    <label className={`text-white bg-transparent ${todo.done ? "line-through" : "no-underline"}`}
                        for={todo.id} type="text">
                        {todo.title}
                    </label> 
                </div>
                
                ))}
            </form>
    );
}