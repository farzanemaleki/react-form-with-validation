import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = event =>{
        setEnteredAge(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        };
        if( +enteredAge < 1 ){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }
        const newUser = {
            id: Math.round(Math.random()*1000) ,
            name: enteredName,
            age: enteredAge
        };
        props.onAddUser(newUser);
        setEnteredName('');
        setEnteredAge('');
    };

    const errorHandler = () =>{
        setError(null);
    };

    return(
      <>
        {error && (
            <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />
        )}
        <form onSubmit={formSubmitHandler}>
            <Card className={styles.form}>
                <div className={styles['form-control']} >
                    <label> Username </label>
                    <input 
                        type='text'
                        onChange={nameChangeHandler}
                        value={enteredName}
                    />
                </div>
                <div className={styles['form-control']} >
                    <label> Age (Years) </label>
                    <input 
                        type='number'
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />
                </div>
                <Button type="submit">Add User</Button>
            </Card>
        </form>
      </>
    );
}

export default AddUser;

