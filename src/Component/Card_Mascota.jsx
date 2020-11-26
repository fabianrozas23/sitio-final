import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import mifoto from './yo.png';

const CardExampleCard = () => (
  <Card>
    <Card.Content>
      <Card.Header>Mi perro JOEY</Card.Header>
      
      <Card.Description>
      <Image src={mifoto} size='medium' />
        <p>Este es mi perro Yorkshire. Su nombre es Joey y viene del significado unión 
          y amor. Es un perro miedoso, dormilon y muy regalon. Le gusta comer mucho y salir
          a pasear.   
        </p>
      </Card.Description>
    </Card.Content>
    
  </Card>
)

export default CardExampleCard

