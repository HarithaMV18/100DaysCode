import React from 'react'

const Content = ({newColor,hexCode,toggleText}) => {
   return (
    <div className='content-area flex items-center justify-center flex-direction-col' style={{backgroundColor:`${hexCode}`, color:`${toggleText?"black":"white"}`}} >
        <p style={{fontWeight:"900",fontSize:"1.5rem"}}>{newColor!==""?newColor:"Empty Value"}</p>
        <p style={{fontWeight:"900",fontSize:"1rem"}}>{hexCode}</p>     
      
    </div>
  )
}

export default Content
