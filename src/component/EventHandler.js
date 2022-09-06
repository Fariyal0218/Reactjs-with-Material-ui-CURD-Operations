import React from 'react';

function EventHandler() {
  const [text, setText] = React.useState('');

  function handleTextChange(event) {
    setText(event.target.value); 
  }

  const displayData=(data)=>{
      console.log(data);
  }

  return (
    <div>
      <MyInput inputValue={text} onInputChange={handleTextChange} sendData={displayData}/>

      {text}
    </div>
  );
}
function MyInput({ inputValue, onInputChange ,sendData}) {

    const obj={
        name:'John',
        city:'Pune'
    }

  return (
      <div>
           <input type="text" value={inputValue} onChange={onInputChange} />
         <button onClick={()=>sendData(obj)}>Send</button>
      </div>
   
  );
}

export default EventHandler


   