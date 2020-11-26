import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import fotomia from './yo.png';

const CardExampleCard = () => (
  <Card>
    <Card.Content>
      <Card.Header>Fabian Rozas</Card.Header>
      <Card.Meta>
        <span className='date'>Instagram: @fabianrozas_</span>
      </Card.Meta>
      <Card.Description>
      <Image src={fotomia} size='medium'/>
        <p>Mi nombre es Fabian Andres Rozas Alfaro, tengo 23 años y estoy estudiadno Ingenieria Civil en Informatica en la Universidad de Valpariso.
        Me gusta escuchar música, salir con mis amigos y ver series. Además me gusta hacer fotos algunas veces (mi instagram es: @first.cam). Me considero una
        persona introvertida, pero cuando me conoces soy el mas simpatico del mundo ajajja.</p>
      </Card.Description>
    </Card.Content>

  </Card>
)

export default CardExampleCard

