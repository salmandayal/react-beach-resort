import React, { createContext, Component, useContext } from 'react'
import items from './data'

const RoomContext = createContext();
//<RoomContext.Provider value={}
class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRoom: [],
        featuredRooms: [],
        loading: true,
    }

    componentDidMount() {

        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms, featuredRooms, sortedRoom: rooms, loading: false
        });
    }

    formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = { ...item.fields, images, id }
            return room
        })
        return tempItems;
    }

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}




// export RoomConsumer = RoomContext.Consumer;
const useRoomContextValue = () => useContext(RoomContext);
export { RoomProvider, useRoomContextValue, RoomContext }