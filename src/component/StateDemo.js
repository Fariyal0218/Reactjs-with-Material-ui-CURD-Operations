import React from "react";

// function StateDemo(){

        //let message="Helloooo"
        // useState --> hook = function

//     const[message,SetMessage]=React.useState("")

//     const check=()=>{
        
//         SetMessage("Hiiiii")
//         console.log(message);

//     }

//     return(

//         <div>

//             <h1>State Demo!!!</h1>

//             <p>Message :{message}</p>
//             <button type="button" onClick={check}>Check</button>

//         </div>
//     )
// }
// export default StateDemo

//using Class Component


class StateDemo extends React.Component{
    constructor(){
        super()
        this.state={
            message:'Hellooo'
        }
    }

    check=()=>{

        this.setState({message:"Hiiii"})
        console.log(this.state.message);

    }

    render(){

        return(
            <div>
                <h1>State Demo !!!</h1>
                <p>Message : {this.state.message}</p>
                <button type="button" onClick={this.check}>Check</button>
            </div>
        )
    }
}

export default StateDemo
