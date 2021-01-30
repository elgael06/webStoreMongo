import './App.css';
import socketIOClient from "socket.io-client";
import { useEffect, useState } from 'react';

const ENDPOINT = "ws://localhost:88/";

function App() {
  const [ response,setResponse]= useState<String[]>([]);
  useEffect(() => {     
    const socket =socketIOClient.io(ENDPOINT);
    socket.on("events", (data: Array<String>) => {
      console.log(data);      
      setResponse(data);
    });
    
  },[]);
  return (
    <div className="App">
      <span>listo!</span>
      {response.map(d => <b>{d}</b>)}
    </div>
  );
}

export default App;
