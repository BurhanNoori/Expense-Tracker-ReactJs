import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import DUMMY_EXPENSE from "./components/expense";
function App() {
	const [expense, setExpense] = useState(DUMMY_EXPENSE);

	const newExpenseHandler = (newExpense) => {
		setExpense(prevExpense => {
			
			return [newExpense, ...prevExpense];
		})
	}
	return (
		<div className='App'>
			<NewExpense onAddNewExpense={newExpenseHandler} />
			<Expenses items={expense} />
		</div>
	);
}

export default App;
