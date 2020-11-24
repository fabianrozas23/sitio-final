import React from 'react'

import {  Label,Grid, Segment} from 'semantic-ui-react'
import Card from './Card';
import Card_Jorge from './Card_Jorge';
import Conteiner from './Conteiner';
const GridExampleCelled = () => (
    <Grid columns={2}>
    <Grid.Column >
      <Segment raised>
      <Label color='red' horizontal>
        Emprendedores
      </Label>
      ¿Quienes Somos?
        
        <Card />
        <Card_Jorge/>

        

        
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <Label as='a' color='black' ribbon='Right'>
          Informacion
        </Label>
        Detalles del Emprendimiento
        <Conteiner/>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default GridExampleCelled