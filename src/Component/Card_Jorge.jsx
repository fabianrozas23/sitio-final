import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import facherito from './Facherito.jpeg';

const CardExampleCard = () => (
  <Card>
    <Card.Content>
      <Card.Header>Jorge Rodriguez</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
      <Image src={facherito} size='medium' />
        <p>Mi nombre es Jorge Eduardo Rodriguez Antiquera, tengo 27 años, estudie en el Colegio Villa Aconcagua de la comuna de Concon
           toda mi enseñanza basica y media. Luego ingrese a la Universidad de Valparaiso a la carrera de 
           Ingenieria Civil Informatica. Principalmente me considero una persona creativa, que siempre busca aprender nuevas cosas para poder aplicarla o solo con el hecho de investigar algo nuevo.
        </p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        1000000 Amigos
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard

