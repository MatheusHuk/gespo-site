import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube, faFacebook, faTwitter, faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './index.css';

export default function Footer(){
    return(
        <>
            <div className="main-footer" id = "foot">
            <div className="container">
            <div className="row">
            {/*Coluna-1*/}
            <div className="col-md-3 col-sm-6">
            <h4>Sobre nós</h4>
            <ul className="list-unstyled">
                <li>Nossos números</li>
                <li>Carreiras</li>
                <li>Ouvidoria</li>
                <li>Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001</li>
            </ul>
            </div>
            {/*Coluna-2*/}
            <div className="col-md-3 col-sm-6">
            <h4>Falem conosco</h4>
            <ul className="list-unstyled">
                <li>Dúvidas Frequentes</li>
                <li>gespo@gespo.com</li>
                <li>Telefone: 2556-4061</li>
                <li>em dias úteis, das 9h às 18h</li>
            </ul>
            </div>
            {/*Coluna-3*/}
            <div className="col-md-3 col-sm-6">
            <h4>Suporte</h4>
            <ul className="list-unstyled">
                <li>FAQ</li>
                <li>Chat</li>
                <li>suporte@gespo.com.br</li>
            </ul>
            </div>
            {/*Coluna-3*/}
            <div className="col-md-3 col-sm-6">
            <h4>Rede sociais</h4>
            <ul className="list-unstyled">
                <li className="social"><FontAwesomeIcon icon={faYoutube} size="2x" /></li>
                <li className="social"><FontAwesomeIcon icon={faFacebook} size="2x" /></li>
                <li className="social"><FontAwesomeIcon icon={faInstagram} size="2x" /></li>
                <li className="social"><FontAwesomeIcon icon={faTwitter} size="2x" /></li>
            </ul>
            </div>
            </div>
            {/*Botão footer*/}
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} Grupo Gespo - All Rights 
                    Reserved
                </p>
            </div>
            </div>
            </div>
        </>
    )
}