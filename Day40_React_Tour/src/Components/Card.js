import React, {  useState } from "react";

const Card = ({tourData,setTourData,loadData,fetchErr,setLoading}) => {
  const [readText,setReadText]=useState([])
  const toggleText=(ids)=>{
   
    setReadText((preValue)=>({...preValue,[ids]:!preValue[ids]}))
  }
  const deleteItems=(id)=>{
    
    const deleteItemList=tourData.filter((data)=>{ return data.id!==id})
    setTourData(deleteItemList)
  }
  const refresh=()=>{
    setLoading(true)
    setTimeout(()=>(async()=>await loadData())(),1000)
  }

  return (
  
    tourData.length?tourData.map((item)=>{
      
      return (
        <div className="card-container" key={item.id}>
      <div className="card">
        <div className="topCard">
          <img
            src={item.img}
            alt="tour-images"
          />
        </div>
        <div className="bottomCard ">
          <header className="flex items-center justify-between">
            <h2>{item.title}</h2>
            <p>{item.amount}</p>
          </header>
        <p className="display-inline">{readText[item.id]?item.desc:(item.desc).split('.',1).join('.')}</p>{" "}
        <button style={{border:"0px", backgroundColor:"white",cursor:"pointer",color:"green",fontWeight:"bold"}} onClick={()=>toggleText(item.id)}>{readText[item.id]?" ...Read less":" ...Read more"}</button>
        <button id={item.id} className="btn" onClick={()=>deleteItems(item.id)}>Not Interested</button>
        </div>
      </div>
    </div>
      )
    }):<main>
    
   <div  className="flex justify-between items-center flex-direction-col" style={{fontWeight:"bold",marginTop:"20px",height:"10vh"}}>
    {fetchErr && <p>{fetchErr}</p>}
    {!fetchErr && <p>No Tours Left</p>}
    <button style={{width: "70px",height: "25px"}} onClick={()=>refresh()}>Refresh</button></div>
    </main>
      
  
  );
};

export default Card;
