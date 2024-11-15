import React from "react";

import "./PlaceForm.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button"
import {VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'
import { useForm } from "../../shared/hooks/form-hook";


const NewPlace = (props) => {

    const [formState, inputHandler] = useForm({
        title: {value: '', isValid: false},
        description: {value: '', isValid: false},
        address: {value:'', isValid:false}
    }, false);

    
    const placeSubmitHandler = event => {
        event.preventDefault();
        // send data to server
        console.log(formState.inputs);
    };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id = "title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Title"
        onInput = {inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Descriptions"
        validators={[VALIDATOR_MINLENGTH(5), VALIDATOR_MAXLENGTH(100)]}
        errorText="Please enter a valid description, character length: 5 to 100"
        onInput = {inputHandler}
      />
      <Input
        id = "address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Address"
        onInput = {inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
            ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
