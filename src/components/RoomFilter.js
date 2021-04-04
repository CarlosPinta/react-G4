import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context';
import Title from "../components/Title";

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;
    let types = getUnique(rooms, 'type');
    //add all
    types = ['all', ...types];
    //map
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    });
    return (
        <section className="filter-container">
            <Title title="Buscar habitaciones" />
            <form className="filter-form">
                {/* Select type*/}
                <div className="form-group">
                    <label htmlFor="type">Tipo Habitacion</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange} >
                        {types}
                    </select>
                </div>
                {/* end Select type*/}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Invitados</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange} >
                        {people}
                    </select>
                </div>
                {/* end guests */}
                {/*  Precio */}
                <div className="form-group">
                    <label htmlFor="price">
                        Precio de habitacion ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* end Precio */}
                {/*  Tamaño */}
                <div className="form-group">
                    <label htmlFor="size">Tamaño Habitacion</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} />
                    </div>
                </div>
                {/* end Precio */}
                {/* Adicionales */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Desayuno</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="breakfast">Mascotas</label>
                    </div>
                </div>
                {/* end Adicionales */}
            </form>
        </section>
    );
}
