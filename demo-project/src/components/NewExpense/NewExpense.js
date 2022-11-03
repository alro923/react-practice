import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

// 사용자 입력을 위한 form 을 반환하는 컴포넌트
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}> Add New Expense</button>}
            {isEditing &&
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler} />}
        </div>
    );
};

export default NewExpense;