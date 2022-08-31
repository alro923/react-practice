import React from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    const saveFilterOptionHandler = (enteredFilterOption) => {
        const filterOption = {
            ...enteredFilterOption,
            id: Math.random().toString()
        };
        console.log(filterOption);
    };


    return (
        <Card className='expenses'>
            <ExpensesFilter onChange={saveFilterOptionHandler}></ExpensesFilter>

            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
            <ExpenseItem title={props.items[4].title} amount={props.items[4].amount} date={props.items[4].date}></ExpenseItem>
            <ExpenseItem title={props.items[5].title} amount={props.items[5].amount} date={props.items[5].date}></ExpenseItem>
        </Card>
    );
}
export default Expenses;