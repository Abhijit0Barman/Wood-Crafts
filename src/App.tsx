import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainRoutes from "./Routes/MainRoutes"
import { SingleProduct } from './pages/SingleProduct';
function App() {
  return (
    <div className="App">
      {/* <SingleProduct/> */}
          <MainRoutes />
    </div>
  );
}

export default App;
