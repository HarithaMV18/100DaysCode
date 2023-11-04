import React from 'react'
import DisplayItems from './DisplayItems'

const ContentRight = ({addNewItem,setAddNewItem,handleClick,displayItem,setDisplayItem}) => {
    const deleteItems=(id)=>{
        // setDisplayItem()
        const removeItems=displayItem.filter((item)=>{
            return item.id!==id
        })
        setDisplayItem(removeItems)
    }
  return (
    <div className='rightContent'>
        <DisplayItems 
        displayItem={displayItem}
        deleteItems={deleteItems}/>
      
    </div>
  )
}

export default ContentRight
