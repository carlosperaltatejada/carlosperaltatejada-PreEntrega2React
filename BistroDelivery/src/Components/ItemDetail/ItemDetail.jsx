import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 

const ItemDetail = ({item}) => {
    return (
   /*  <div className='row'>
        <div className='col-md-4 iifset-md-4'>
            <img src={item.imagen} className='img-fluid' alt={item.nombre} />
            <h3> {item.nombre} </h3>
            <p> {item.descripcion} </p>
            <p> $ {item.precio} </p>
            <p> Cantidad: {item.stock} </p>
        </div>

    </div> */
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top"  src={item.imagen} className='img-fluid' alt={item.nombre} />
    <Card.Body>
      <Card.Title>{item.nombre}</Card.Title>
      <Card.Text>
            <p> {item.descripcion} </p>
            <p> $ {item.precio} </p>
            <p> Cantidad: {item.stock} </p>
      </Card.Text>
    
    </Card.Body>
  </Card> 
    )
}

export default ItemDetail