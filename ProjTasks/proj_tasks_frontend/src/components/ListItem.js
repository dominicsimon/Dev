import React from 'react'
import {Link} from 'react-router-dom'
const ListItem = (props) => {
  let   tmpstr = '/tasks/' + props.Task.id;
  console.log('Props:', props)
    return (
      
        <Link to={`/tasks/${props.Task.id}`}>
            <h3>{props.Task.title}</h3>
        </Link>
    )
}
export default ListItem