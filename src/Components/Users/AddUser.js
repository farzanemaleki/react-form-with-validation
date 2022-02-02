import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = event =>{
        setEnteredAge(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        const newUser = {
            id: Math.round(Math.random()*1000) ,
            name: enteredName,
            age: enteredAge
        };
        props.onAddUser(newUser);
        setEnteredName('');
        setEnteredAge('');
    }

    return(
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
    );
}

export default AddUser;

