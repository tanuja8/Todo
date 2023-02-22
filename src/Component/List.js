import React from 'react'

export default function List() {
    const fruits=["Apple","Mango","Banana","Orange"]
    const result=fruits.map((fruit)=><h1>{fruit}</h1>)
  return (
    <div>
      <h1>{result}</h1>
    </div>
  )
}
