import React, { useState } from "react";
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'

const AddUser =(props)=>{
    const addUserHandler =(event)=>{
        if(enteredAge.trim().length === 0 || enteredName.trim().length === 0){
            return;
        }
        if(+enteredAge < 0){
            return;
        }
       event.preventDefault()
       props.onAddUser(enteredName,enteredAge)
       setEnteredName('')
       setEnteredAge('')
    }

    const [enteredName,setEnteredName] = useState('')
    const [enteredAge,setEnteredAge] = useState('')

    const userNameChangeHandler = (e)=>{
       
        setEnteredName(e.target.value)
    }
    const ageChangeHandler = (e)=>{
       
        setEnteredAge(e.target.value)
    }
return(
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredName} onChange={userNameChangeHandler}/>
             <label htmlFor="age">Age(in years)</label>
             <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}></input>
             <Button type="submit">Add User</Button>
        </form>
    </Card>
)
}
export default AddUser