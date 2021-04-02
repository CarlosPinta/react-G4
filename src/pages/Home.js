import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from "../components/Services";
import FeaturedRooms from '../components/FeaturedRooms'
export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Habitaciones de lujo" subtitle="Habitaciones de lujo desde $299">
                    <Link to='/rooms' className="btn-primary">
                        Our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    );
}