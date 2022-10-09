import React , {useState, useEffect}from 'react'
import ListItem  from '../components/ListItem'

const TasksListPage = () => {
    let [tasks, setTasks] = useState([])
    useEffect (() => {
        getTasks()
    }, [])
    
    let getTasks =  async () => {
       let response = await fetch('/api/tasks/')
       let data = await response.json()
       console.log('DATA', data)
       setTasks(data)
    }
    return (
        <div>
            <div className="tasks-list">
                {tasks.map((task,index)=> (
                    <ListItem key ={index} task={task}/>
                ))}
            </div>
        </div>
    )
}
export default TasksListPage