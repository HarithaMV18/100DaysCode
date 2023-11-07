import React from 'react'

const InputColor = ({newColor,setNewColor,color_list,setHexCode,setToggleText}) => {
    const setColor=(e)=>{
        e.preventDefault();
        const findColor=color_list[newColor]?color_list[newColor]:"Color Not Present";
        setHexCode(findColor)
    }
    const changeColor=(e)=>{
      setNewColor(e.target.value)
      setHexCode("");
      setToggleText("black")
    }


  return (
      <form onSubmit={(e)=>setColor(e)}>
        <input type="text"  style={{width:"250px",boxShadow:"0px 5px 10px rgba(0, 0, 0, 0.3)",borderRadius:"5px",border:"1px solid black",padding:"5px 5px"}} placeholder="Enter color" value={newColor} onChange={(e)=>changeColor(e)}
        />
      </form>
    
  )
}

export default InputColor
