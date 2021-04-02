import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';
export default class services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Cóctel Gratis",
                info: "Una gran variedad de bebidas, unicamente la encuentras en Beach Resort"

            },
            {
                icon: <FaHiking />,
                title: "Senderismo sin fin ",
                info: "Lugares con un gran ambiente"

            },
            {
                icon: <FaShuttleVan />,
                title: "Transporte gratis Gratis",
                info: "transporte asegurado, con personal con gran experiencia "

            },
            {
                icon: <FaBeer />,
                title: "Cerveza de alta calidad",
                info: "La cerveza nos caracteriza por el sabor y la calidad de nuestra cebada"

            },
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="Servicios" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
