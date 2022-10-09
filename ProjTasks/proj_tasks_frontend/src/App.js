import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import TasksListPage from './pages/TasksListPage'


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route path = "/" exact component={TasksListPage}/>
    </div>
    </Router>
  );
}

export default App;
