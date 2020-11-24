import 'semantic-ui-css/semantic.min.css'
import Menu from './Component/Menu';
import React from "react";
import Grid from './Component/Grid';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
      </header>
      <body >
        <div className ="Grid">
          <Grid/>
        </div>
      </body>


       
       
    </div>
  );


}

export default App;