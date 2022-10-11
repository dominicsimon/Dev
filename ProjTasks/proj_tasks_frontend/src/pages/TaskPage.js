import { useParams } from 'react-router-dom';
import React , {useState, useEffect }from 'react';


const  TaskPage = ({ match }) => {
   console.log ('Taskpage match:' ,match);
       let {TaskId} = useParams();
        let [Task, setTask] = useState([]);

        useEffect(() => {
            getTask()
            },[TaskId])
        
        
        let getTask = async () => {
           
           let response= await fetch(`/api/tasks/${TaskId}/`)
          let data = await response.jason()
          // console.log('await response jason', data); 
         setTask(data);        
            
        };


        if (Task == null) {
            return( 
                <div> 
                    TaskPage.js
                    <p> Task is null </p>
                </div>
                )
        }
        else{
            return( 
                <div> 
                    TaskPage.js
                    <p> {`Task?body`}</p>
                    <textarea value = 'Task?.body'>
                    </textarea>
                </div>
            )
        }
        

    };
   

export default TaskPage