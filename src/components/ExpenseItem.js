import React from "react";
import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate"; 
function ExpenseItem(props) {
	
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
			</div>
			<div className='expense-item__price'>${props.amount}</div>
		</Card>
	);
}

//we cannot inject expenseDate like {expenseDate} because expenseDate is an object and we can only inject string or number or simple js operation like 1+1 using {}

export default ExpenseItem;
