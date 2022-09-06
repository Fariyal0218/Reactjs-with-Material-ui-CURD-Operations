import React from "react";

const RadioInput=()=>{

    const [gender,setGender]=React.useState('');

    const handleChange=(event)=>{

        setGender(event.target.value)

    }

    return(

        <div align="center">

            <form >

                <p>Gender</p>
               
                <div>

                    <input
                    type="radio"
                    value="male"
                    checked={gender === 'male'}
                    onChange={handleChange}/>Male
                
                </div>

                <div>

                    <input
                    type="radio"
                    value="female"
                    checked={gender ==='female'}
                    onChange={handleChange}/>Female

                </div>


                <div>

                    <input
                    type="radio"
                    value="transgender"
                    checked={gender === 'transgender'}
                    onChange={handleChange}/>Transgender
               
                </div>

            </form>

            <h2>Selected Value :{gender}</h2>

        </div>

    )
}
export default RadioInput