import React, { useState } from 'react'
import "./TodoList.css"

const TodoList = () => {
    const[activity, seActivity]=useState("")
    const [listData, setListdata]=useState([])
    function AddValue(){
        // setListdata([...listData, activity]) //async
        setListdata((data)=>{
            const updatedItem=[...listData,activity]
            return updatedItem
        })
        seActivity("")
        console.log(listData)
    }
    function removeActivity(i){
        const updatedData=listData.filter((elem,id)=>
        {
            return i!==id
        }
        )
        setListdata(updatedData)
    }
    function removeAll(){
      setListdata([])
    }
  return (
    <>
    <div className='container'>
        <div className='header'><h1>Todo List</h1></div>
        <div className='Add-field'>
        <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>seActivity(e.target.value)} />
        <button onClick={AddValue}>Add</button>
        </div>
        {/* b/c ) is reserved kw so we have to use as string */}
        <p>Here is Your List :{")"}</p>
        <div>
            { listData!=[] && listData.map((e,i)=>{
                return(
                   <>
                   <div className='Add-field'>
                   <p className='list-p' key={i}>{e}</p>
                   <button className='remove' onClick={()=>removeActivity(i)}>remove</button>
                   </div>
                   </>
                )
                
            })}
            
        </div>
        {listData.length>=1 && <button className='removeAll' onClick={removeAll}>Remove All</button>}
    </div>
    </>
  )
}

export default TodoList