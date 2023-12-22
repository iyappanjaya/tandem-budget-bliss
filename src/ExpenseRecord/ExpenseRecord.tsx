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
                {/* Merged Item 1 and Item 2 */}
                <div className="date-info">
                    <div className="date-big">{`${new Date(expense.date).toLocaleDateString('en-US', {
                        day: '2-digit',
                    })}`}</div>
                    <div className="month-year-info">
                        <div className="month-year">
                            {`${new Date(expense.date).toLocaleDateString('en-US', {
                                month: '2-digit',
                                year: 'numeric',
                            })}`}
                        </div>
                        <div className="day-badge">{expense.day}</div>
                    </div>
                </div>

                {/* Item 3: Category */}
                <div className="category">{expense.category}</div>

                {/* Item 4: Amount in red color as rupee */}
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
