import 'semantic-ui-css/semantic.min.css'
import Menu from './Component/Menu';
import React from "react";
import Grid from './Component/Grid';
import Card from './Component/Card';
import ContentBlock from './Component/ContentBlock';
import Login from './Component/Login';



function App() {
  return (
    <div className="App">
       <Menu/>
       <div><Grid/></div>
       <div><Card/></div>
       <div><ContentBlock/></div>
       <div><Login/></div>
       


       
       
    </div>
  );


}

export default App;
