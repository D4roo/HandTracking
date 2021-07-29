import React, {useRef} from 'react';
//import logo from './logo.svg';
import * as tf from "tensorflow/tfjs";
import * as handpose from "tensorflow-models/handpose";
import Webcam from 'react-webcam';
import './App.css';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
      <Webcam
        ref={webcamRef}
        style={{
        position:"obsolute",
        marginLeft:"auto",
        marginRight:"auto",
        left:0,
        right:0,
      textAlign:"center",
        zIndex:9,
        width:640,
        height:480
      }}
      />
      <canvas
      ref={canvasRef}
      style={{
        position:"obsolute",
        marginLeft:"auto",
        marginRight:"auto",
        left:0,
        right:0,
        textAlign:"center",
        zIndex:9,
        width:640,
        height:480
      }}
      />
      </header>
    </div>
  );
}

export default App;
