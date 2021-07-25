import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomsContainer({context})
{
    const {loading,sortedRooms,rooms}=context;
    if(loading)
                    {
                        return<Loading/>
                    }
                    return(
                        <div>
                            RoomsContainer
                            <RoomsFilter rooms={rooms} />
                            <RoomsList rooms={sortedRooms} />
                        </div>
                    )
}

export default withRoomConsumer(RoomsContainer)



// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'
// import { createGlobalStyle } from 'styled-components'
// function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     const {sortedRooms,loading,rooms}=value;
//                     if(loading)
//                     {
//                         return<Loading/>
//                     }
//                     return(
//                         <div>
//                             RoomsContainer
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>

//     )
// }

// export default RoomsContainer
