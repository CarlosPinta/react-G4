import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;

    //componentDidMount() {}
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <div className="error">
                <h3>El sitio no se encontro</h3>
                <Link to="/rooms" className="btn-primary">regresar a las habitaciones</Link>

            </div>
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        const [mainImg, ...defaultImg] = images;
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            Regresar a las Habitaciones
                    </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>
                                Detalles
                            </h3>
                            <p>{description}</p>
                        </article>
                        <artcle className="info">
                            <h3>Información</h3>
                            <h6>Precio: ${price}</h6>
                            <h6>Tamaño: {size} SQFT</h6>
                            <h6>
                                max capacity:{""}
                                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                            </h6>
                            <h6>{pets ? "Mascotas permitidas" : "Prohibido mascotas"}</h6>
                            <h6>{breakfast && "Desayuno gratis incluido"}</h6>
                        </artcle>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Adicionales</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>-{item}</li>
                        }
                        )}
                    </ul>
                </section>
            </>
        );
    }
}
