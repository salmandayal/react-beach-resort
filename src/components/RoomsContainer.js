import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { useRoomContextValue } from '../context'
import Loading from './Loading'

export default function RoomsContainer() {

    const { loading, sortedRooms, rooms } = useRoomContextValue();

    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </div>
    )
}
