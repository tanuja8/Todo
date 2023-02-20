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
         <h2 className="text-white m-3">What's the plan for Today?</h2>
         <div className=" py-3">
         <input type="text" placeholder='Enter your Activity...' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
         <button type="button" className="addbtn px-2 mx-3 text-white"  onClick={addAtivity}>Add Task</button>
         </div>
         <div>
          {listData.map(data=>{
            return(
              <div className="py-3 ">
             <div className='text-white  task_area'>
               <input type="text" value={data }></input>
              <button className="R_btn px-2">Remove</button>
              </div>
              </div>
            )
          })}
         
         </div>
     
    </div>
  )
}
