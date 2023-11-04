import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
// import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

const Content = () => {
  const [addNewItem, setAddNewItem] = useState("");
  const [displayItem, setDisplayItem] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    const addingNewItems={id:displayItem.length+1,task:addNewItem, status:false};
    setDisplayItem((preValue)=>{return [...preValue,addingNewItems]})
    setAddNewItem("");
   
  };
  return (
    <>
      <form id="form-field" onSubmit={handleClick} style={{ textAlign: "center" }}>
        <input
          type="text"
          style={{
            width: "400px",
            padding: "5px",
            marginRight: "15px",
            marginBottom: "20px",
            borderRadius:"5px"
          }}
          id="form-input"
          value={addNewItem}
          onChange={(e) => setAddNewItem(e.target.value)}
          required
          placeholder="add list...."
        />
        <button>
          <FaPlus />
        </button>
      </form>
      <div className="flex justify-center main-content">
        {/* <ContentLeft /> */}
        <ContentRight
          addNewItem={addNewItem}
          handleClick={handleClick}
          setAddNewItem={setAddNewItem}
          displayItem={displayItem}
          setDisplayItem={setDisplayItem}
        />
      </div>
    </>
  );
};

export default Content;
