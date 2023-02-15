import React, { useState } from 'react'

export default function Todo() {
  const[activity,setActivity]=useState("")
  const[listData,setlistData]=useState([]);

  function addAtivity(){
    // setListData([...listdata,activity])
    // console.log(listdata)
    setlistData((listData)=>{
     const updatedList=[...listData,activity] 
     console.log(updatedList)
     setActivity('');
     return updatedList
    })
  }
  return (
    <div>
      <div className=' container'>
         <h1>Todo List</h1>
         <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
         </div>
         <button onClick={addAtivity}>Add</button>
         <div>
          {listData.map(data=>{
            return(
             <div>
               <h2>{data}</h2>
              <button>remove</button>
              </div>
            )
          })}
         
         </div>
     
    </div>
  )
}
