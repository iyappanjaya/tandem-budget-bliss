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
    // Mock data with profileImage property for John Doe
    {
      id: 1,
      date: '2023-01-01',
      day: 'Mon',
      category: 'Food',
      amount: 25.5,
      note: 'Lunch',
      person: 'John Doe',
      profileImage: 'john.jpg', // Add a sample image path for John Doe
    },
    // Mock data with profileImage property for Jane Smith
    {
      id: 2,
      date: '2023-02-15',
      day: 'Wed',
      category: 'Transportation',
      amount: 15.75,
      note: 'Bus fare',
      person: 'Jane Smith',
      profileImage: 'jane.jpg', // Add a sample image path for Jane Smith
    },
    // Additional records for John Doe
    {
      id: 3,
      date: '2023-03-10',
      day: 'Fri',
      category: 'Shopping',
      amount: 50.0,
      note: 'Groceries',
      person: 'John Doe',
      profileImage: 'john.jpg', // Reuse John Doe's image
    },
    {
      id: 4,
      date: '2023-04-05',
      day: 'Tue',
      category: 'Entertainment',
      amount: 30.0,
      note: 'Concert tickets',
      person: 'John Doe',
      profileImage: 'john.jpg', // Reuse John Doe's image
    },
    {
      id: 5,
      date: '2023-05-20',
      day: 'Sat',
      category: 'Utilities',
      amount: 80.0,
      note: 'Electricity bill',
      person: 'John Doe',
      profileImage: 'john.jpg', // Reuse John Doe's image
    },
    // Additional records for Jane Smith
    {
      id: 6,
      date: '2023-06-15',
      day: 'Thu',
      category: 'Dining',
      amount: 40.0,
      note: 'Dinner',
      person: 'Jane Smith',
      profileImage: 'jane.jpg', // Reuse Jane Smith's image
    }
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
