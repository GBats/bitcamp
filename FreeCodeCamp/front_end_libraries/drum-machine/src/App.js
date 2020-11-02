import React, { useEffect, useState } from "react";

function App() {
 const [volume, setVolume] = useState("0.5");


 
  const sounds = [
    {
      key: 'Q',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      key: 'W',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      key: 'E',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      key: 'A',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      key: 'S',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      key: 'D',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      key: 'Z',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      key: 'X',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      key: 'C',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
  ]
  
 



  useEffect(() =>  {
    window.addEventListener('keydown', (e) => {
      let y= sounds.find(x=>x.key===e.code.substring(3,4))
      if(y){
          document.getElementById(y.key).style.backgroundColor = "#21618C"
          document.getElementById(y.key).style.color = "white" 
           setTimeout(()=>{
          document.getElementById(y.key).style.backgroundColor = "white"
          document.getElementById(y.key).style.color = "#21618C"
       },100)  
        
      }
      switch (e.code) {
        case "KeyQ": 
          
          const snd0 = new Audio(sounds[0].mp3)
          snd0.volume=document.getElementById("inpt").value;
          snd0.play();
          break;
        case 'KeyW': 
          
          const snd1 = new Audio(sounds[1].mp3)
          snd1.volume=document.getElementById("inpt").value;
          snd1.play();
          break;
        case 'KeyE': 
               
          const snd2 = new Audio(sounds[2].mp3)
          snd2.volume=document.getElementById("inpt").value;
          snd2.play();
          break;
        case 'KeyA':          
          const snd3 = new Audio(sounds[3].mp3)
          snd3.volume=document.getElementById("inpt").value;
          snd3.play();
          break;
        case 'KeyS': 
          const snd4 = new Audio(sounds[4].mp3)
          snd4.volume=document.getElementById("inpt").value;
          snd4.play();
          break;
        case 'KeyD':         
          const snd5 = new Audio(sounds[5].mp3)
          snd5.volume=document.getElementById("inpt").value;
          snd5.play();
          break;
        case 'KeyZ':          
          const snd6 = new Audio(sounds[6].mp3)
          snd6.volume=document.getElementById("inpt").value;
          snd6.play();
          break;
        case 'KeyX':         
          const snd7 = new Audio(sounds[7].mp3)
          snd7.volume=document.getElementById("inpt").value;
          snd7.play();
          break;
        case "KeyC":         
          const snd8 = new Audio(sounds[8].mp3)
          snd8.volume=document.getElementById("inpt").value;
          snd8.play();
          break;
        default:
         break;
      }
    });
  
  },[])
 

  return (
    <div className="App">
      
      <div className="container">
        <div className="buttons">

{sounds.map(item=>
  <button key={item.key} id={item.key} onClick={()=>{
    document.getElementById(item.key).style.backgroundColor = "#21618C"
    document.getElementById(item.key).style.color = "white" 
     setTimeout(()=>{
    document.getElementById(item.key).style.backgroundColor = "white"
    document.getElementById(item.key).style.color = "#21618C"
 },100)  
    const snd = new Audio(item.mp3)
    snd.volume=volume;
    snd.play();
  }}>{item.key}</button>)}
        </div>

        <div className="action">
          <div className="vol-lvl">
            <p className="display-vol">Volume:{Math.floor(volume * 100)}</p>
          </div>
          <input
            id="inpt"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="slider"
          ></input>
        </div>
      </div>
      <footer>
        <p style={{color:'#21618C'}}>by giorgi batselashvili</p>
      </footer>
    </div>
  );
}

export default App;
