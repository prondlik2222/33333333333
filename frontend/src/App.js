
import  { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] =useState(0)
  return (
    <div id="App" className="container mx-auto mt-4 p-4 bg-gradient-dark">
      <h1 className="text-white display-4 fw-bold mb-2">
        TapSwap
      </h1>

      <div className="row gx-4 mb-4">
        <div className="col-3 text-center">
          <span>🟡</span>
          <span className="ms-2 text-white">{count}</span>
        </div>
        <div className="col-3 text-center">
          <span>🔷</span>
          <span className="ms-2 text-white">0/h</span>
        </div>
        <div className="col-3 text-center">
          <span>🌟</span>
          <span className="ms-2 text-white">0</span>
        </div>
        <div className="col-3 text-center">
          <span>🟣</span>
          <span className="ms-2 text-white">0</span>
        </div>
      </div>
         
      {/* Container for the image */}
      <div className="d-flex justify-content-center mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EGUMaDiGjK_20AqlIuL338KRk-ksyis33Q&s"
          alt="coin"
          className="img-fluid rounded-circle cursor-pointer"
          onClick={()=>setCount(p=>p+1)}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer className="footer bg-light p-4 text-center">
        <div className="row gx-4">
          <div className="col-2">
            <button className="btn btn-purple btn-sm w-100">
              <span className="text-2xl">🟡</span>
              <span className="text-sm mt-1">Earn</span>
            </button>
          </div>
          <div className="col-2">
            <button className="btn btn-purple btn-sm w-100">
              <span className="text-2xl">✔️</span>
              <span className="text-sm mt-1">Tasks</span>
            </button>
          </div>
          <div className="col-2">
            <button className="btn btn-purple btn-sm w-100">
              <span className="text-2xl">🏠</span>
              <span className="text-sm mt-1">Town</span>
            </button>
          </div>
          <div className="col-2">
            <button className="btn btn-purple btn-sm w-100">
              <span className="text-2xl">🔄</span>
              <span className="text-sm mt-1">Swap</span>
            </button>
          </div>
          <div className="col-2">
            <button className="btn btn-purple btn-sm w-100">
              <span className="text-2xl">😎</span>
              <span className="text-sm mt-1">Account</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;