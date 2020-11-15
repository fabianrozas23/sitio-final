import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Label, Menu, Grid, Image, Segment, Header } from 'semantic-ui-react'
import MyModal from './MyModal';
import React from "react";




function App() {

  var [openModal, setOpenModal] = React.useState(false);
  
  
  console.log("modal state", openModal);
  
  return (
    <div className="App">
       <Menu>
        <Menu.Item
          name='Home'         
          onClick={()=>console.log("click menu 1")}
        >
          Home 
        </Menu.Item>

        <Menu.Item
          name='Formulario' 
          //onClick={()=>console.log("click menu 2")}
          onClick={(e,d)=>setOpenModal(true)}
        >
          Formulario
          
        </Menu.Item>

        <Menu.Item
          name='Tools'          
          onClick={()=>console.log("click menu 3")}
        >
          Tools
        </Menu.Item>
        
        <Menu.Item
          name='Descricpción' 
          
          onClick={()=>console.log("click menu 4")}
        >
          Descripción
        </Menu.Item>

        <Menu.Item
          name='Redes Sociales'         
          onClick={()=>console.log("click menu 5")}
        >
          Redes Sociales
        </Menu.Item>
        
      </Menu>
       <Button as='div' labelPosition='right' onClick={(e,d)=>setOpenModal(true)}>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic pointing='left'>
        1000000
      </Label>
    </Button>
    
    
    <Button as='div' labelPosition='left'>
      <Label as='a' basic pointing='right'>
        2,048
      </Label>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
    </Button>
    
    
    <Button as='div' labelPosition='left'>
      <Label as='a' basic>
        4800
      </Label>
      <Button icon>
        <Icon name='fork' />
      </Button>
    </Button>
    <MyModal visible={openModal} onClose={()=>{console.log("close"); setOpenModal(false);}} />


    <Grid columns={2}>
    <Grid.Column>
      <Segment raised>
        <Label as='a' color='red' ribbon>
          Overview
        </Label>
        <span>Account Details</span>

        <Image src='https://react.semantic-ui.com/logo.png' />

        <Label as='a' color='blue' ribbon>
          Community
        </Label>
        <span>User Reviews</span>

        <Image src='https://react.semantic-ui.com/logo.png' />
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <Label as='a' color='orange' ribbon='right'>
          Specs
        </Label>
        <Image src='https://react.semantic-ui.com/logo.png' />

        <Label as='a' color='teal' ribbon='right'>
          Reviews
        </Label>
        <Image src='https://react.semantic-ui.com/logo.png' />
      </Segment>
    </Grid.Column>
  </Grid>

  <Header as='h2'>
    <Icon.Group size='large'>
      <Icon name='twitter' />
      <Icon corner name='add' />
    </Icon.Group>
    Add on Twitter
  </Header>

    </div>
  );


}

export default App;
