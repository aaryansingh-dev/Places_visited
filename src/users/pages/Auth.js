import React, {useState} from "react";
import { useContext } from "react";

import  {useForm} from '../../shared/hooks/form-hook'
import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import Card from '../../shared/components/UIElements/Card'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";
import './Auth.css'
import { AuthContext } from "../../shared/context/auth-context";

const Auth = () => {

    const auth = useContext(AuthContext);

    // signup or login state
    const [loginState, switchLoginState] = useState(true);

    // state handling for Login and signupform
    const [formState, inputHandler, setDataHandler] = useForm({
        email: {value: '', isValid: false},
        password: {value: '', isValid: false}
    }, false);

    // when the form is submitted
    const onSubmitHandler = event => {
        event.preventDefault()
        if(loginState){
            console.log('Data Submitted', formState)
        }
        auth.login();
    }

    // function to switch modes
    const switchModeHandler = event => {
        if(loginState){
            setDataHandler({
                ...formState.inputs,
                name: {
                    value:'',
                    isValid: false
                }
            }, false)
        }
        else{
            setDataHandler({
                ...formState.inputs,
                name:undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid)
        }
        switchLoginState(prevMode => !prevMode)
    }

    return(
        <Card className='authentication'>
            <h2 className="authentication-header">
            {loginState ? 'LOGIN': 'SIGN UP'}
            </h2>
            <form onSubmit={onSubmitHandler}>

                {!loginState && <Input 
                    id='name'
                    element='input'
                    type='text'
                    label='Name'
                    errorText='Please enter a valid Name.'
                    validators = {[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}/>}

                <Input 
                id='email'
                element='input'
                type='text'
                label='Email Id'
                errorText='Please enter a valid Email Id.'
                validators = {[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                onInput={inputHandler}/>

                <Input 
                id='password'
                element='input'
                type='password'
                label='Password'
                errorText='Please enter a valid password. Min length is 3.'
                onInput={inputHandler}
                validators= {[VALIDATOR_MINLENGTH(3)]}>
                </Input>

                <Button type='submit' disabled={!formState.isValid}>{loginState ? 'LOGIN': 'SIGN UP'}</Button>
            </form>

            <Button inverse onClick={switchModeHandler}>{loginState ? 'SWITCH TO SIGN UP': 'SWITCH TO LOGIN'}</Button>
            
        </Card>
    );
};

export default Auth;
