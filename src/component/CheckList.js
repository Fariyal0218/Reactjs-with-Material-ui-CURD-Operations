import React from 'react'

function CheckList(){

    const data=[{
        id:1,
        name:'A'
    },{
        id:2,
        name:'B'
    },{
        id:3,
        name:'C'
    }]

    const[list,setList]=React.useState(data)

    const newUser={
        id:4,
        name:'D'
    }

    const addData=()=>{

        setList([...list,newUser])
        
    }

    return(
        <>
            <h1>User List</h1>
            <TableData list={list} setList={setList}/>
            <button type='button' onClick={addData}>Add</button>
        </>
    )
}

function TableData({list,setList}){

    const remove=(index)=>{

        console.log(list[index]);
        const temp=[...list]
        temp.splice(index,1)
        setList(temp)

    }

    return(
        <ul>
                {
                    list.map((item,index)=>(
                        <div>
                            <li>{item.name}</li>
                            <button type='button' onClick={()=>remove(index)}>Remove</button>
                        </div>
                        
                    ))
                }
        </ul>
    )
}

export default CheckList

// useMemo
// useReducer