import React, { useState } from "react";

function Practice(){

    const [loggedIn,setLoggedIn]=useState(false)
    
    return(

        <div>
            <h1>Welcome to the App </h1>

            <button onClick={()=> setLoggedIn (! loggedIn)}>

            {loggedIn ? "Log out" : "Log in"}

            </button>

            { loggedIn ? (
                
                <h1>Hello, Anthony </h1>
            ): (
                <div>
                    <h2>Please log in to continue</h2>
                </div>
            )

            }
        </div>

    )
}

export default Practice