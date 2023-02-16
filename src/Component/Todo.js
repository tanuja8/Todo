import "./Todo.css";
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
    <div className="todolist mt-5">
      <div className=' container'>
         <h2 className="text-white m-3">What's the plan for Today?</h2>
         <input type="text" placeholder='Add  your Activity...' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
         <button onClick={addAtivity}>Add</button>
         </div>
         <div>
          {listData.map(data=>{
            return(
             <div className='text-danger'>
               <h2>{data}</h2>
              <button>remove</button>
              </div>
            )
          })}
         
         </div>
     
    </div>
  )
}
