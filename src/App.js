import React from "react";
import "./App.css";
import CardHeader from "./components/CardHeader/CardHeader";
import CardFooter from "./components/CardFooter/CardFooter";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <div>Icon</div>
      <CardHeader user="jsondev"></CardHeader>
      <Card></Card>
      <CardFooter></CardFooter>
    </div>
  );
}

export default App;
