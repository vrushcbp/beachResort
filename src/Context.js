import React, { Component } from 'react'
import items from './Data'
const RoomContext = React.createContext()

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        pets: false,
        breakfast: false,
    }

    componentDidMount() {
        let rooms = this.formatData(items)
        //  console.log(rooms)
        let featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            //
            price: maxPrice,
            maxPrice,
            maxSize
        })

    }
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    }

    getRooms = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug)
        return room;
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = event.target.name;


        this.setState({
            [name]: value
        }, this.filterRooms)
    }

    filterRooms = () => {
        let { rooms, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = this.state

        // ************************all the rooms***********
        let tempRooms = [...rooms]
        console.log('temp', tempRooms)

        //************************transform value************************
        capacity = parseInt(capacity)
        price = parseInt(price)

        //************************filte by capacity************************
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        //************************filte by type************************
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        //************************filte by price************************

        tempRooms = tempRooms.filter(room => room.price <= price)

        //************************filte by size************************
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        //************************filte by breakfast************************
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }

        //************************filte by pets************************
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }
        //************************Change************************
        this.setState({
            sortedRooms: tempRooms
        })
    }


    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRooms: this.getRooms, handleChange: this.handleChange }}>
                {this.props.children}

            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer
export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}
export { RoomProvider, RoomConsumer, RoomContext }
