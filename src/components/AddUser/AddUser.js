import React from "react";
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'

const AddUser =(props)=>{
    const addUserHandler =(event)=>{
       event.preventDefault()
    }
return(
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"/>
             <label htmlFor="age">Age(in years)</label>
             <input type="number" id="age"></input>
             <Button type="submit">Add User</Button>
        </form>
    </Card>
)
}
export default AddUser