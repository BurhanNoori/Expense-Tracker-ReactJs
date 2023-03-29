import React, { useState } from "react";
import "./NewExpense.css";

const ExpenseForm = (props) => {
	const { onAddExpense } = props;
	// const [titleInput, setTitle] = useState("");  approach 1, where I have taken 3 states for 3 dynamic variables
	// const [amountInput, setAmount] = useState("");
	// const [dateInput, setDate] = useState("");
    const [userInput, setUserInput ] = useState({    //approach 2, where I have taken 1 state and create an object incorporating all variables
        title: '',
        amount: '',
        date: ''
    });
	const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,                   //approach 2.1 using spread operator, keeping the states of other variable and updating only title here.
        //     title: event.target.value
        // })

        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value } //approach 2.2(recommended), as react schedules the state change and
        })    //it doesnt change the state instantly, thus incase of changing multiple states at a time may cause the loss of changes of one or more variables,                                                                                   
	};        //but by passing anonymous function in the useState function, react takes the snap of each changed state and update the variable accordingly

	const amountChangeHandler = (event) => {
		setUserInput( (prevState) => {
            return {
                ...userInput,
                amount: event.target.value
            }
        })
	};

	const dateChangeHandler = (event) => {
		setUserInput( (prevState) => {
            return {
                ...userInput,
                date: event.target.value
            }
        })
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		const newExpense = {
			title: userInput.title,
			amount: +userInput.amount,
			date: new Date(userInput.date)
		};
		onAddExpense(newExpense);
		setUserInput({
			title: '',
        	amount: '',
        	date: ''
		});

	}

	return (
		<form onSubmit={formSubmitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={ userInput.title} onChange={titleChangeHandler}></input>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						value={userInput.amount}
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}></input>
				</div>
				<div className='new-expense__control'>
					<label>Date of Expense</label>
					<input
						type='date'
						value={userInput.date}
						min='2021-01-01'
						max='2025-12-31'
						onChange={dateChangeHandler}></input>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
