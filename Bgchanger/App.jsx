import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      </div>
      <div className="fixxed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 ">Change The screen Color</div>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-q
      blue px-3 py-2  rounded-xl">
        
        <button onClick={ () => setColor("red")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        // we havwe to use compulspry callback function here cz onclick needs a functon as a parameyter otherwise it will treat as a value of it it is onclikc syntx 
        style={{backgroundColor : "Red"}}>Red</button>
        
        <button onClick={ () => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor : "Green"}}>Green</button>

        <button  onClick={ () => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor : "Olive"}}>Olive</button>
        
          <button  onClick={ () => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor : "yellow"}}>Yellow</button>

          <button  onClick={ () => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor : "pink"}}>Pink</button>

          <button  onClick={ () => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor : "purple"}}>Purple</button>

          <button  onClick={ () => setColor("lavender")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor : "lavender"}}>Lavender</button>

        <button  onClick={ () => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor : "black"}}>Black</button>
        
      </div>
    </>
  );
}

export default App;
