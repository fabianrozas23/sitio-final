import React from 'react'
import {  Label,Grid, Image, Segment } from 'semantic-ui-react'

const GridExampleCelled = () => (
    <Grid columns={2}>
    <Grid.Column>
      <Segment raised>
        <Label as='a' color='red' ribbon>
          Overview
        </Label>
        <span>¿Quienes Somos?</span>

        
        <Image src='https://scontent.fkna2-1.fna.fbcdn.net/v/t1.0-9/12814731_1031088363623327_3129624582978945547_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=kjJsu1HxjWwAX9pZ5o0&_nc_ht=scontent.fkna2-1.fna&oh=48cbd13b796dc564bc5c5a892097b53e&oe=5FE1E685' size='medium' />
        <p>Mi nombre es Felipe Andres Rojas Gonzalez, tengo 22 años, estudie en el Colegio Santo Domingo de Valparaíso
           toda mi enseñanza basica y media. Luego ingrese a la Universidad de Valparaiso con 17 años a la carrera de 
           Ingenieria Civil Informatica. Principalmente me considero una persona bien responsable, organizada, solidaria 
           con los demas pero por otro lado soy un poco timido y me complico aveces las cosas con muy poco.
        </p>

        
        <Image src='https://react.semantic-ui.com/logo.png' />
        <p>Alumno de Ingenieria Civil Informatica en la Universidad de Valparaiso. Me gusta escribir poesia, ir a exposiciones 
          e ir al bosque.</p>
    

        
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <Label as='a' color='orange' ribbon='right'>
          Specs
        </Label>
        <span>Detalles del Emprendimiento</span> 
        <Image src='https://recicladoindustrial.com/wp-content/uploads/2020/09/logo-ceroscrap-sello2.png' centered />
        <p>Bienvenidos…...........</p>
          
          <p> Somos una empresa dedicada a asistir a todo tipo de establecimientos industriales, comerciales y de servicios en el tratamiento 
          de los rezagos y residuos de su unidad productiva. </p>

          <p>Nos enfocamos en realizarlo de manera rentable y sustentable. Conocedores del deber de optimizar la gestión de medio ambiente como 
          forma de dar una respuesta urgente a las necesidades de reducir el impacto de los procesos productivos, ponemos a su disposición las soluciones 
          a medida de su empresa.
          Proveemos respuestas innovadoras y de avanzada sobre todo en aquellos aspectos que colaboren a aumentar el porcentaje de residuos destinados 
          a reciclado, mejorando su gestión ambiental y económica.
        </p>
        
        
        <div>
    <p>Datos Utiles.</p>

    <Grid columns={4} padded='horizontally'>
      <Grid.Column>
        <Image src='https://recicladoindustrial.com/wp-content/uploads/2020/09/icon-01-70x61.png' />
        <p>Objetivo Cero Relleno Sanitario </p>
        <p> Trabajamos junto a su empresa con el objetivo de acercarlo al “cero residuo al relleno sanitario” de manera rentable y sustentable. </p>
        
      </Grid.Column>
      <Grid.Column>
        <Image src='https://recicladoindustrial.com/wp-content/uploads/2020/09/icon-02-70x61.png' />
        <p>Todas las Corrientes</p>
        <p> Nos especializamos en ofrecer una propuesta diferencial de reciclado de materiales de difícil recuperación, tales como los combinados en sus distintas variantes
           y de todas las corrientes.</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://recicladoindustrial.com/wp-content/uploads/2020/09/icon-03-70x61.png' />
        <p>Visita en Planta</p>
        <p>Técnicos con experiencia en los nuevos procesos de reciclado realizarán una visita a su planta para asesorarlo en los distintos 
          aspectos de la gestión de residuos.</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://recicladoindustrial.com/wp-content/uploads/2020/09/icon-04-70x61.png' />
        <p>Sustentabilidad y Rentabilidad</p>
        <p>Asesoramos en la identificación y resolución del impacto de los residuos en su actividad productiva, implementando una estrategia de equilibrio entre sustentabilidad y rentabilidad.</p>
      </Grid.Column>
    </Grid>
  </div>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default GridExampleCelled