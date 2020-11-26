import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

//const colorsA = ['Inicio', 'Validador','Fotografias', 'Videos', 'Contacto']

export default class MenuExampleColoredInverted extends Component {
  //state = { activeA: colorsA[0] }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const navStyle = {
      color: 'Blue'
    };

    return (
      <div>
        <Menu inverted>
        <ul className="nav-links">
                <Link style={navStyle} to='/Inicio'>
                        Validador de RUT
                </Link> 
                
            </ul>
            <ul className="nav-links">
                <Link style={navStyle} to='/Formulario'>
                        Formulario
                </Link> 
                
            </ul> 
        
          <Dropdown item text='Links directos'>
          <Dropdown.Menu>
            
            <Dropdown.Header></Dropdown.Header>
            <Dropdown.Item>Facebook</Dropdown.Item>
            <Dropdown.Item>Instagram</Dropdown.Item>
            
      
          </Dropdown.Menu>
        </Dropdown>
        </Menu>

        
      </div>
    )
  }
}