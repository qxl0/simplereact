import React, {useState} from 'react';

const Todo = () => {
    const [task, setTask] = useState("");
    const [todolist, settodolist] = useState([]);
    const handleAddtodo = () => {
        const newtodolist = [...todolist,{task, isCompleted: false, id: Date.now()} ];
        settodolist(newtodolist);
        setTask('');
    }
    const handleClick=({id}) => {
        const newtodolist = todolist.map(todo => {
            if(todo.id === id){
                return {...todo, isCompleted:!todo.isCompleted};
            }
            return todo;
        });
        settodolist(newtodolist);
    }

    const handleDelete=() => {
        const newtodolist = todolist.filter(todo => !todo.isCompleted);
        settodolist(newtodolist);
    }
    return (
        <div>
            <input type="text" value={task} onChange={(event)=> setTask(event.target.value)}/>
            <button onClick={handleAddtodo}>Add to do</button>
            <ul>
                {todolist? todolist.map((todo, index) => (
                    <li key={index} id={todo.id} 
                    onClick={() => {handleClick(todo)}}
                    style={{fontWeight: todo.isCompleted? 'normal': 'bold'}}>{todo.task}</li>
                )) : null} 
            </ul>
            <div>
                <button onClick={handleDelete}>Delete Completed</button>
            </div>
        </div>
    )
}

export default Todo;