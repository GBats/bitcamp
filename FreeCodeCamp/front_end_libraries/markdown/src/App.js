import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import marked from 'marked'

function App() {
const [input,setInput] = useState("")

const markdown = marked(input,{breaks:true,gfm: true})


  return (
    <div className="App">
      <h1 className="title">Markdown Previewer</h1>
    <div className="container">
      <div className="input">
        <p>Editor</p>
        <textarea onChange={(e)=>setInput(e.target.value)}></textarea>
      </div>
      <div className="output">
      <p>Previewer</p>
      <div className="preview" id="preview" dangerouslySetInnerHTML={{__html:markdown}} /> 

      </div>
      </div>
      <p>by giorgi batselashvili</p>
    </div>
  );
}

export default App;
