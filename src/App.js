import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";


function App() {

  const  ButtonColor = "#f2a33c"
  return(
    <div className="app">
   <div className="calc-wrapper">
    <Input />
    <div className="row">
      <Button symbol= "7"/>
      <Button symbol="8"/>
      <Button  symbol="9"/>
      <Button symbol="/" color={ButtonColor}/>
    </div>
    <div className="row">
      <Button symbol="4" />
      <Button symbol="5"/>
      <Button symbol="6" />
      <Button symbol="*"  color={ButtonColor}/>
    </div>
    <div className="row">
      <Button  symbol="1"/>
      <Button symbol="2"/>
      <Button symbol="3" />
      <Button  symbol="+" color={ButtonColor}/>
    </div>
    <div className="row">
      <Button symbol="0" />
      <Button symbol="." />
      <Button  symbol="="/>
      <Button  symbol="-" color={ButtonColor}/>
    </div>
    <Button  symbol="clear" color="red"/>
   </div>
    
    </div>
  
  );

  
  
}

export default App;
