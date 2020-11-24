/* eslint-disable max-len */

import React from 'react'
import { Container, Divider,Grid,Image } from 'semantic-ui-react'

const ContainerExampleAlignment = () => (
  <div>
    <Container textAlign='justified'>
      <Divider />
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
    </Container>
        </div>
      
  
)

export default ContainerExampleAlignment