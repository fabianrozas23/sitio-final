import React from "react";
import {Modal, Header, Icon, Button, Form, Container} from "semantic-ui-react"

export default function MyModal(props){
    let {visible, onClose} = props;
    
    
    React.useEffect(()=>{
        console.log("se inicio el componente, o cambio una de sus propiedades");


    }, [visible]);


    if (visible){
        return ( <Modal
            basic            
            open={visible}
            size='small'
           
          >
            <Header icon>
              <Icon name='archive' />
              Formulario
            </Header>
            <Modal.Content>
              <p>
                    Formulario del Usuario 
              </p>
            </Modal.Content>

            <Container>
    <p>
      Agregar datos personales del usuario para poder guardarlos.
      
      
    </p>
  </Container>

  <Form>
    <Form.Group unstackable widths={3}>
      <Form.Input label='First name' placeholder='First name' />
      <Form.Input label='Last name' placeholder='Last name' />
      <Form.Input label='Age' placeholder='Age' />

    </Form.Group>

    <Form.Group widths={3}>
      <Form.Input label='Address' placeholder='Address' />
      <Form.Input label='Phone' placeholder='+569' />
      <Form.Input label='Codigo Postal' placeholder='Codigo Postal' />
    </Form.Group>
    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Button type='submit'>Submit</Button>
     
  
  </Form>



            <Modal.Actions>
              <Button color='red' inverted onClick={() =>onClose() }>
                <Icon name='remove' /> Cancelar
              </Button>
              <Button color='green' inverted onClick={() => onClose()}>
                <Icon name='checkmark' /> Aceptar
              </Button>
              
            </Modal.Actions>
          </Modal>)
    } else {
        return (<></>);

    }
}