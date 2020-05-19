
import React from 'react'
import { useRoomContextValue } from '../context'
import Title from './Title'
//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}
const RoomsFilter = ({ rooms }) => {
    const {
        handleChange,
        type,
        capacity,
        price,
        maxPrice,
        minPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = useRoomContextValue();
    //get unique types
    let types = getUnique(rooms, 'type');
    //add all
    types = ['all', ...types]
    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })


    return (
        <section className="filter-container">
            <Title title='search rooms' />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className='form-control'
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end select type */}
                {/* select  guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className='form-control'
                        onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end guest */}
                {/* price range */}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input
                        className='form-control'
                        type="range"
                        name='price'
                        min={minPrice}
                        max={maxPrice}
                        id='price'
                        value={price}
                        onChange={handleChange} />
                </div>
                {/* end price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={handleChange}
                            className='size-input' />
                        <input
                            type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            onChange={handleChange}
                            className='size-input' />
                    </div>
                </div>
                {/* end of size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}

export default RoomsFilter
