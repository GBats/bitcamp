import React, { useEffect, useState } from "react";

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [session, setSession] = useState(25);
  const [sessionTime, setSessionTime] = useState(session * 60);
  const [start, setStart] = useState(false);
  const [myTimer, setMyTimer] = useState();
  const [audio, setAudio] = useState();
  const [sessionType, setSesstionType] = useState("Session");
  if (sessionTime === 0) {
    if(sessionType==="Session"){
      setSesstionType("Break")
      audio.play();
      setSessionTime(60 * breakTime);
    }else {
      setSesstionType("Session")
      audio.play();
      setSessionTime(60 * session);
    }
   
  }

  const handleSessionLength = (prop) => {
    if ((session === 1 && prop === -1) || (session === 60 && prop === 1)) {
      return;
    } else {
      setSession(session + prop);
      setSessionTime(session * 60 + prop * 60);
    }
  };

  const handleBreakLength = (prop) => {
    if ((breakTime === 1 && prop === -1) || (breakTime === 60 && prop === 1)) {
      return;
    } else {
      setBreakTime((breakTime) => breakTime + prop);
    }
  };

  useEffect(() => {
    if (start) {
      setMyTimer(
        setInterval(() => {
          setSessionTime((sessionTime) => sessionTime - 1);
        }, 1000)
      );
    } else {
      clearInterval(myTimer);
    }
  }, [start]);

  const handleRefresh=()=>{
    clearInterval(myTimer);
    setSession(25);
    setBreakTime(5);
    setStart(false);
    setSessionTime(25*60);
  }

  return (
    <div className="App">
      <div className="title">25 + 5 Clock</div>
      <div className="time-control">
        <div className="break-length">
          <div className="break-title">Break Length</div>
          <div className="control-btn">
            {start ?  <div className="control-btn"><button>
              <i className="fa fa-arrow-down fa-2x" />
            </button>
            <div className="break-length">{breakTime}</div>
            <button>
              <i className="fa fa-arrow-up fa-2x" />
            </button>
            </div>
            :
            <div className="control-btn">
             <button onClick={() => handleBreakLength(-1)}>
              <i className="fa fa-arrow-down fa-2x" />
            </button>
            <div className="break-length">{breakTime}</div>
            <button onClick={() => handleBreakLength(1)}>
              <i className="fa fa-arrow-up fa-2x" />
            </button>
            </div>}
            
          </div>
        </div>
        <div className="session-length">
          <div className="break-title">Session Length</div>
          <div className="control-btn">
          {start ?  <div className="control-btn"><button>
              <i className="fa fa-arrow-down fa-2x" />
            </button>
            <div className="break-length">{session}</div>
            <button>
              <i className="fa fa-arrow-up fa-2x" />
            </button>
            </div>
            :
            <div className="control-btn">
             <button onClick={() => handleSessionLength(-1)}>
              <i className="fa fa-arrow-down fa-2x" />
            </button>
            <div className="break-length">{session}</div>
            <button onClick={() => handleSessionLength(1)}>
              <i className="fa fa-arrow-up fa-2x" />
            </button>
            </div>}
          </div>
        </div>
      </div>

      <div className="session">
        <div className="session-title">{sessionType}</div>
        <div className="session-timer">
          {Math.floor(sessionTime / 60) < 10
            ? "0" + Math.floor(sessionTime / 60)
            : Math.floor(sessionTime / 60)}
          :{sessionTime % 60 < 10 ? "0" + (sessionTime % 60) : sessionTime % 60}
        </div>
      </div>
      <div className="session-control">
        <button className="start_stop" onClick={() => setStart(!start)}>
          <i className="fa fa-play fa-2x" />
          <i className="fa fa-pause fa-2x" />
        </button>

        <button className="refresh" onClick={()=>handleRefresh()}>
          <i className="fa fa-refresh fa-2x" />
        </button>
      </div>
      <span style={{ fontSize: "14px", color: "#00264d" }}>
        by giorgi batselashvili
      </span>
      <audio
        id="beep"
        preload="auto"
        ref={(audio) => {
          setAudio(audio);
        }}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

export default App;
