import React from "react";
import {useParams} from 'react-router-dom';
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH} from '../../shared/util/validators'

import './PlaceForm.css'

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
        title:"Empire State Building",
        description:"One of the most famous buildings in the world",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address:"20 W 34th St., New York, NY 10001, United States",
        coordinates: {lat:40.7484, lng:-73.9857},
        creator: 'u2'
    }
];


const UpdatePlace = props => {

    const placeId = useParams().placeId;

    const place = dummyPlaces.find(p => p.id === placeId);

    if(!place){
        return <div className="center">
             <h2>Could not find a place with this id.</h2>
        </div>
       
    }
    return (
        <form className="place-form">
            <Input
            id = 'title'
            element='input'
            type='text'
            label='Title'
            validators ={[VALIDATOR_REQUIRE()]}
            errorText = "Please enter a valid Title"
            onInput={() => {}}
            value={place.title}
            valid={true}>
            </Input>

            <Input
            id = 'description'
            element='textarea'
            label='Description'
            validators ={[VALIDATOR_MINLENGTH(5), VALIDATOR_MAXLENGTH(100)]}
            onInput={() => {}}
            value={place.description}
            valid={true}
            errorText='Please enter a valid description'>
            </Input>

            <Button type='submit' disabled={true}>
               UPDATE PLACE
            </Button>
        </form>
    );


};

export default UpdatePlace;