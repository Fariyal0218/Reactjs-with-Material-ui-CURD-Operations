import Test from "./Test";

const message ="React Hello World!!!"

const person={

    name:"fariyal",
    city:"pune"

}

const userList=[{

    id:1,
    name:'fariyal'

},{
    id:2,
    name:'arbiya'
}]

function Demo(){

    return(

        <div>
            <Test/>
            <h1>React Demo!!!</h1>
            <p>New Content!!!</p>
            <p>Message : {message}</p>
            <p>Name : {person.name}</p>
            <p>City : {person.city}</p>

            <ul>
                {
                    userList.map((user)=>(

                        <li>{user.name}</li>

                    ))
                }
            </ul>
        </div>
    )
}
export default Demo