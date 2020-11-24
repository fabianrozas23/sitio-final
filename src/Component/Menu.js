import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

const colorsA = ['Home', 'Concurso','Ideas', 'Información', 'Contacto', 'Herramientas']

export default class MenuExampleColoredInverted extends Component {
  state = { activeA: colorsA[0] }

  handleAClick = (e, { name }) => this.setState({ activeA: name })
  

  render() {
    const { activeA } = this.state

    return (
      <div>
        <Menu inverted>
          {colorsA.map((c) => (
            <Menu.Item
              key={c}
              name={c}
              active={activeA === c}
              color={'red'}
              onClick={this.handleAClick}
            />
          ))}
          <Dropdown item text='Redes Sociales'>
          <Dropdown.Menu>
            
            <Dropdown.Header></Dropdown.Header>
            <Dropdown.Item>Facebook</Dropdown.Item>
            <Dropdown.Item>Instagram</Dropdown.Item>
            <Dropdown.Item>Google</Dropdown.Item>
            <Dropdown.Item>Twitter</Dropdown.Item>
            
      
          </Dropdown.Menu>
        </Dropdown>
        </Menu>

        
      </div>
    )
  }
}