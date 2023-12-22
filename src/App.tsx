import './App.css';
import ExpensesList from './ExpensesList/ExpensesList';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <ExpensesList />
      </header>
    </div>
  );
}

export default App;
