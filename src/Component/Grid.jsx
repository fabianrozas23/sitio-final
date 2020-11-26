import React from 'react'

import {  Label,Grid, Segment} from 'semantic-ui-react'
import Card from './Card';
import Card_Mascota from './Card_Mascota';
import Conteiner from './Conteiner';

const GridExampleCelled = () => (
    <Grid columns={2}>
    <Grid.Column >
      <Segment raised>
      <Label color='blue' horizontal>
        Informacion personal
      </Label>
        
        <Card />
        <Card_Mascota/>

      </Segment>
    </Grid.Column>

    <Grid.Column>
    <Segment raised>
      <Label color='blue' horizontal>
      Informacion sobre el curso
      </Label>
        <Conteiner/>
        <formulario/>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default GridExampleCelled