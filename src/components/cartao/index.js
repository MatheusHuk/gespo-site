import React,{ useState } from 'react';
import { Card, Button, Row, Col, Image} from 'react-bootstrap';
import './index.css';


export default function CartaoBack({ titulo, subTitulo, texto, icone, textoDetalhado, textoBotao }){

    const [aberto, setAberto] = useState(false)

    return(    
        
        <Card className = "text-center"  border="light" style={{ width: '18rem'}}>
                <Card.Body className = "cor-card">
                    <Card.Text className = {"titulo-principal"}>{titulo}</Card.Text>
                    <Card.Text className = {"subtitulo-principal"}>{subTitulo}</Card.Text>
                    <Image className = "distancia" src= {icone} />
                    <Card.Text>{texto}</Card.Text>
    <Button  onClick = {() => {setAberto(!aberto)}} variant="outline-light">{textoBotao}</Button>
                </Card.Body>
                {
                aberto ?
                <Card.Body  className = "borda">
                    <Row>
                        <Col>
                            <Card.Text>{textoDetalhado}</Card.Text>
                        </Col>
                    </Row>    
                </Card.Body> : null
                }
                
        </Card>
    )
}