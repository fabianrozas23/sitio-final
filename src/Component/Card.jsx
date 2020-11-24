import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  
  <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Felipe Rojas</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
      <Image src='https://scontent.fkna2-1.fna.fbcdn.net/v/t1.0-9/12814731_1031088363623327_3129624582978945547_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=kjJsu1HxjWwAX9pZ5o0&_nc_ht=scontent.fkna2-1.fna&oh=48cbd13b796dc564bc5c5a892097b53e&oe=5FE1E685' size='medium' />
        <p>Mi nombre es Felipe Andres Rojas Gonzalez, tengo 22 años, estudie en el Colegio Santo Domingo de Valparaíso
           toda mi enseñanza basica y media. Luego ingrese a la Universidad de Valparaiso con 17 años a la carrera de 
           Ingenieria Civil Informatica. Principalmente me considero una persona bien responsable, organizada, solidaria 
           con los demas pero por otro lado soy un poco timido y me complico aveces las cosas con muy poco.
        </p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Amigos
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard

