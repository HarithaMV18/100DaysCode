import Header from "./Components/Header";
import Loading from "./Components/Loading";
import Card from './Components/Card';
import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [tourData,setTourData]=useState([]);
  const [fetchErr,setFetchErr]=useState(null)
  const API_URL = "http://localhost:3500/items";
const loadData=async()=>{
 
  try{
    const response=await fetch(API_URL);
    if(!response.ok) throw Error("Data not found")
    const tourDataList=await response.json();
    setTourData(tourDataList)
    setFetchErr(null)
    
  }
  catch(err){
    setFetchErr(err.message)
  }
  finally{
    setLoading(false)
  }

}  
useEffect(()=>{
 
  setTimeout(()=>(async()=>await loadData())(),2000)
},[])
  if (loading) {
    return (
        <Loading />
    );
  } else {
    return <>
    <Header />
    <Card tourData={tourData} setTourData={setTourData} loadData={loadData} fetchErr={fetchErr} setLoading={setLoading}/>
    </>
  }
}

export default App;
