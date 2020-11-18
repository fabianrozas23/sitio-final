import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const colorsA = ['Home', 'Concurso', 'yellow', 'olive', 'green', 'teal']

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
        </Menu>

        
      </div>
    )
  }
}