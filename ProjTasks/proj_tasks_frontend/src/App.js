import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import TasksListPage from './pages/TasksListPage';
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={TasksListPage}/>
        <Route path="/task/:id" component = {TaskPage} />
      </div>
    </Router>
  )
}

export default App
