import React from "react";
import "./App.css";
import Button from "./components/Button";


function App() {
  return(
    <div className="app">
   <div className="calc-wrapper">
    <div className="row">
      <Button symbol= "7"/>
      <Button symbol="8"/>
      <Button  symbol="9"/>
      <Button symbol="/"/>
    </div>
    <div className="row">
      <Button symbol="4" />
      <Button symbol="5"/>
      <Button symbol="6" />
      <Button symbol="*" />
    </div>
    <div className="row">
      <Button  symbol="1"/>
      <Button symbol="2"/>
      <Button symbol="3" />
      <Button  symbol="+"/>
    </div>
    <div className="row">
      <Button symbol="0" />
      <Button symbol="." />
      <Button  symbol="="/>
      <Button  symbol="-"/>
    </div>
    
   </div>
    
    </div>
  
  );

  
  
}

export default App;
