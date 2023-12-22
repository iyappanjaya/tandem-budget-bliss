// ExpenseRecord.tsx
import React from 'react';
import './ExpenseRecord.css';
import profileImage from '../Assets/profile.jpg'; // Import the image directly

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

interface ExpenseRecordProps {
  expense: Expense;
}

const ExpenseRecord: React.FC<ExpenseRecordProps> = ({ expense }) => {
  return (
    <div className="expense-record">
      <div className="first-row">
        <div className="date-day">
          <span className="date">{expense.date}</span>
          <span className="day-badge">{expense.day}</span>
        </div>
        <div className="category">{expense.category}</div>
        <div className="amount">₹{expense.amount.toFixed(2)}</div>
      </div>
      <div className="divider"></div>
      <div className="second-row">
        <div className="note">{expense.note}</div>
        <div className="person">
          <div className="profile">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
            />
            
            <div className="person-name">{expense.person}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseRecord;
