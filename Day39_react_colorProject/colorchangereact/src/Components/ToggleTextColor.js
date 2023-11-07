import React from 'react'

const ToggleTextColor = ({setToggleText}) => {
  const toggleColor=(e)=>{
    e.preventDefault();
    // newColor==="black"?setToggleText("white"):setToggleText("black")
    setToggleText((preValue)=>{
      return !preValue
    })

  }

  return (
    <form onSubmit={(e)=>toggleColor(e)}>
        <button type="submit" style={{width:"250px",height:"30px",boxShadow:"0px 5px 10px rgba(0, 0, 0, 0.3)",borderRadius:"5px",border:"1px solid black",padding:"5px 5px",cursor:"pointer"}}>Toggle Text</button>
      </form>
  )
}

export default ToggleTextColor
