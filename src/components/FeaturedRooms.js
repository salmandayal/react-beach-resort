import React from 'react'
import { useRoomContextValue } from '../context'
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

const FeaturedRooms = () => {
    let { loading, featuredRooms: rooms } = useRoomContextValue();

    rooms = rooms.map(room => {
        return (
            <Room key={room.id} room={room} />
        )
    })
    return (

        <section className='featured-rooms'>
            <Title title='Featured Rooms' />
            <div className="featured-rooms-center">
                {loading ? <Loading /> : rooms}
            </div>

        </section>
    )
}

export default FeaturedRooms

