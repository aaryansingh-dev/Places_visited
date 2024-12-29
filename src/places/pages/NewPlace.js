import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import "./PlaceForm.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button"
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import {VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';


const NewPlace = (props) => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [formState, inputHandler] = useForm({
        title: {value: '', isValid: false},
        description: {value: '', isValid: false},
        address: {value:'', isValid:false}
    }, false);

    const history = useHistory();

    const placeSubmitHandler = async event => {
      event.preventDefault();
      try {
        await sendRequest(
          'http://localhost:3002/api/places',
          'POST',
          JSON.stringify({
            title: formState.inputs.title.value,
            description: formState.inputs.description.value,
            address: formState.inputs.address.value,
            creator: auth.userId
          }),
          { 'Content-Type': 'application/json' }
        );
        history.push('/');
      } catch (err) {}
    };
  

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
    <form className="place-form" onSubmit={placeSubmitHandler}>
    {isLoading && <LoadingSpinner asOverlay />}
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
    </React.Fragment>
  );
};

export default NewPlace;
