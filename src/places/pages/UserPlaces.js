import React from "react";

import PlaceList from "../components/PlaceList";

const dummyPlaces = [
    {
        id: "p1",
        title:"Empire State Building",
        description:"One of the most famous buildings in the world",
        imageUrl: "https://commons.wikimedia.org/wiki/File:View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg",
        address:"20 W 34th St., New York, NY 10001, United States",
        coordinates: {lat:40.7484, lng:-73.9857},
        creator: 'u1'
    },
    {
        id: "p2",
        title:"Empire State Building",
        description:"One of the most famous buildings in the world",
        imageUrl: "https://commons.wikimedia.org/wiki/File:View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg",
        address:"20 W 34th St., New York, NY 10001, United States",
        coordinates: {lat:40.7484, lng:-73.9857},
        creator: 'u2'
    }
];
const UserPlaces = props => {   

    return <PlaceList items={dummyPlaces}/>
}

export default UserPlaces;