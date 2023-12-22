// ExpensesList.tsx
import React, { useState, useEffect } from 'react';
import ExpenseRecord from '../ExpenseRecord/ExpenseRecord'; // Assuming the ExpenseRecord component is in the same directory
import './ExpensesList.css';

interface Expense {
  id: number;
  date: string;
  day: string;
  category: string;
  amount: number;
  note: string;
  person: string;
  profileImage: string;
}

const mockExpenses: Expense[] = [
  // Mock data with profileImage property
  {
    id: 1,
    date: '2023-01-01',
    day: 'Mon',
    category: 'Food',
    amount: 25.5,
    note: 'Lunch',
    person: 'John Doe',
    profileImage: 'profile.jpg', // Add a sample image path
  },
  // Add more expense items as needed
];

const ExpensesList: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    // In a real application, you would fetch expenses from an API or other data source
    setExpenses(mockExpenses);
  }, []);

  return (
    <div className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseRecord key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpensesList;
