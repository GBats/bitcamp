import React, { useEffect, useState } from "react";


const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];


function App() {
  const clr = colors[Math.floor(Math.random() * colors.length)];
  const [quotes, setQuotes] = useState([{ quote: "", author: "" }]);
  const [index, setIndex] = useState(0);
  const [styles,setStyle]=useState({backgroundColor:clr,transition: "all .8s ease",color:clr})


  const API =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  useEffect(async () => {
    const res = await fetch(API);
    const data = await res.json();

    setQuotes(data.quotes);
    setIndex(Math.floor(Math.random() * quotes.length));
    return () => {
      //
    };
  }, []);

   

  return (
    <div className="App" style={styles} >
      <div className="container" >
      <div className="text-box" style={{backgroundColor:'white'}}>
        <i id="symbol" className="fa fa-quote-left"> </i>
        <span id="text" >{quotes[index].quote}</span>
       
        <span className="author">-{quotes[index].author}</span>
      </div>
      <div className="action">
        <div className="contact">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
          >
            <a className="twitter-link" target="_blank" href="https://www.twitter.com"><i id="twitter" style={styles} className="fa fa-twitter"></i></a>{" "}
          </a>
        </div>
        <div className="button">
          <button style={styles}
           onClick={()=>(setIndex(Math.floor(Math.random() * quotes.length)),
                         setStyle({backgroundColor:clr,transition: "all .8s linear",color:clr}))}
                         
            className="button"
            id="new-quote"
          >
            New quote 
          </button>
        </div>
      </div>
      </div>
      <div className="footer">by <a>Giorgi Batselashvili</a></div>
    </div>
  );
}

export default App;
