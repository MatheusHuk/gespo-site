import React from 'react';
import { Card } from 'react-bootstrap';

export default function CardImgBack({ nome, texto, img }) {

    return (
        <>
            <Card className = "cardImg" style={{ width: '40vh' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{nome}</Card.Title>
                <Card.Text>{texto}</Card.Text>
                </Card.Body>
            </Card>
          </>
    )

}