import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const DisplayItems = ({displayItem,deleteItems}) => {

  const displayTasks=displayItem.length!==0?displayItem.map((items)=>{
 return   <li key={items.id} className='display-items flex items-center justify-between gap-1'       style= {{marginBottom:"15px"}}>
    <input type="checkbox" id={items.id} defaultChecked={items.status}/>
         <label htmlFor={items.id}>{items.task}</label>
         <FaRegTrashAlt onClick={()=>deleteItems(items.id)}/>
         </li> 
   }):""
  return (
  <ul>
    {displayTasks}      
    </ul>
  )
}

export default DisplayItems
