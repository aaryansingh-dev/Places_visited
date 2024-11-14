import React from 'react';

import './NewPlace.css'
import Input from '../../shared/components/FormElements/Input';


 const NewPlace = props => {
    return (
        <form className='place-form'>
            <Input element="input" type="text" label="Title" validators={[]} errorText="Please enter a valid Title"/>
        </form>
    )
 }
export default NewPlace;