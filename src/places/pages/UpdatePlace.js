import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';


import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH} from '../../shared/util/validators'
import './PlaceForm.css'
import { useForm } from "../../shared/hooks/form-hook";
import Card from '../../shared/components/UIElements/Card'

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
        title:"Em. State Building",
        description:"One of the most famous buildings in the world",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address:"20 W 34th St., New York, NY 10001, United States",
        coordinates: {lat:40.7484, lng:-73.9857},
        creator: 'u2'
    }
];


const UpdatePlace = props => { 
    
    const [isLoading, setIsLoading] = useState(true)

    const placeId = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm({
        title: {value:'', isValid: false},
        description: {value:'', isValid:false},
    }, false)

    const place = dummyPlaces.find(p => p.id === placeId);

    useEffect(() => {
        if(place){
            setFormData({
                title:{value:place.title, isValid:true},
                description:{value: place.description, isValid: true}
            }, true);
        }
        setIsLoading(false);
    }, [setFormData, place]);

    if(!place){
        return <div className="center">
             <Card>
             <h2>Could not find a place with this id.</h2>
             </Card>
        </div>
       
    }

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log('Form updated', formState)
    }

    if(isLoading){
        return <div className="center">
             <h2>Loading</h2>
        </div>
    }
    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input
            id = 'title'
            element='input'
            type='text'
            label='Title'
            validators ={[VALIDATOR_REQUIRE()]}
            errorText = "Please enter a valid Title"
            onInput={inputHandler}
            value={formState.inputs.title.value}
            valid={formState.inputs.title.isValid}>
            </Input>

            <Input
            id = 'description'
            element='textarea'
            label='Description'
            validators ={[VALIDATOR_MINLENGTH(5), VALIDATOR_MAXLENGTH(100)]}
            onInput={inputHandler}
            value={formState.inputs.description.value}
            valid={formState.inputs.description.isValid}
            errorText='Please enter a valid description'>
            </Input>

            <Button type='submit' disabled={!formState.isValid}>
                UPDATE PLACE
            </Button>
        </form>)
};

export default UpdatePlace;