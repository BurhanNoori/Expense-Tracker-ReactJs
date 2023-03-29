import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
	const { items } = props;
	const [filteredYear, setYear] = useState("2022");

	const filterYearHandler = (selectYear) => {
		setYear(selectYear);
	};

	const filteredExpenses = items.filter(item => item.date.getFullYear().toString() === filteredYear);
	//console.log(filteredExpenses);
	return (
		<div>
			
			<Card className='expenses'>
				<ExpensesFilter
					onSelectYear={filterYearHandler}
					selectedYear={filteredYear}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
}

//we cannot inject expenseDate like {expenseDate} because expenseDate is an object and we can only inject string or number or simple js operation like 1+1 using {}

export default Expenses;
