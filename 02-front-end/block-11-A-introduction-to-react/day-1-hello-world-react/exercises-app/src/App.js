import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const activities = ['Homework', 'Dishes', 'Groceries', 'Project']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>{ activities.map(activitie => Task(activitie))}</ul>
      </header>
    </div>
  );
}

export default App;
