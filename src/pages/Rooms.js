import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomContainer';

import { Link } from 'react-router-dom';

export const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Nuestras habitaciones">
                    <Link to="/" className="btn-primary">
                        Regresar al Inicio
            </Link>
                </Banner>
            </Hero>
            <RoomContainer></RoomContainer>
        </>);
}
export default Rooms;


