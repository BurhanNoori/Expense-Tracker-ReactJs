import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const {onAddNewExpense} = props;
	const addExpenseHandler = (expense) => {
		const newExpense = {id: Math.random().toString(), ...expense };
		onAddNewExpense(newExpense);
	}
	return (
		<div className='new-expense'>
			<ExpenseForm onAddExpense={addExpenseHandler} />
		</div>
	);
};

export default NewExpense;


