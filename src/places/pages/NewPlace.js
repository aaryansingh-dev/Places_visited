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
import ImageUpload from '../../shared/components/FormElements/ImageUpload';



const NewPlace = (props) => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [formState, inputHandler] = useForm({
        title: {value: '', isValid: false},
        description: {value: '', isValid: false},
        address: {value:'', isValid:false},
        image: {value:null, isValid:false}
    }, false);

    const history = useHistory();

    const placeSubmitHandler = async event => {
      event.preventDefault();
      try {
        const formData = new FormData();
        formData.append('title', formState.inputs.title.value);
        formData.append('description', formState.inputs.description.value);
        formData.append('address', formState.inputs.address.value);
        formData.append('creator', auth.userId);
        formData.append('image', formState.inputs.image.value);
        await sendRequest('http://localhost:5000/api/places', 'POST', formData, {
          Authorization: 'Bearer ' + auth.token
        });
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
      <ImageUpload
          id="image"
          onInput={inputHandler}
          errorText="Please provide an image."
        />
      <Button type="submit" disabled={!formState.isValid}>
            ADD PLACE
      </Button>
    </form>
    </React.Fragment>
  );
};

export default NewPlace;
