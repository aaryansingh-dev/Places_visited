import React from "react";
import {useParams} from 'react-router-dom';

import PlaceList from "../components/PlaceList";

const dummyPlaces = [
    {
        id: "p1",
        title:"Empire State Building",
        description:"One of the most famous buildings in the world",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address:"20 W 34th St., New York, NY 10001, United States",
        coordinates: {lat:40.7484, lng:-73.9857},
        creator: 'u1'
    },
    {
        id: "p2",
        title:"Em State Building",
        description:"One of the most famous buildings in the world",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address:"20 W 34th St., New York, NY 10001, United States",
        coordinates: {lat:40.7484, lng:-73.9857},
        creator: 'u2'
    }
];
const UserPlaces = props => {   
    const uid = useParams().uid;
    const loadedPlaces = dummyPlaces.filter(place => place.creator === uid)
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;