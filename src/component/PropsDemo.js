// Props (Properties) -information that is passed

// from one component to another component

// Props are immutable

function PropsDemo(){

    const message="Hellooo"

    const person ={

        name:"Abc",
        city:"Pune"

    }

    const userList =[

        {
            id:1,
            name:"A"
        },{
            id:2,
            name:"B" 
        },{
            id:3,
            name:"C"
        }
    ]

    return(

        <div>

            <h1>Props Demo!!!</h1>
            <ChildComponent message={message} person={person}/>

            <DisplayList userList={userList}/>
            
        </div>
    )
}

function ChildComponent({message,person}){

    return(
        <div>
            <h2>Text Props</h2>
            <p>Message :{message}</p>
            <p>Name :{person.name}</p>
            <p>City :{person.city}</p>
        </div>
    )
}

function DisplayList(props){

    return(

        <div>
            <ul>
                {
                    props.useList.map((user)=>(
                        <li>{user.id+" | "+user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default PropsDemo