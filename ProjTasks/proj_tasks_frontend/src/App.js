
import React from 'react';
import {BrowserRouter as Router,  Route,   RouterProvider,  Routes } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/body';
import Footer from './components/footer';
import TasksListPage from './pages/TasksListPage'
import TaskPage from './pages/TaskPage';

  function App() {
    /*  <Routes>
            <Route exact  path="/" element ={<TasksListPage/>}/>
            <Route path="/task/:id" element = {<TaskPage/>} />
          </Routes>
    */
     {
      
      return (
        <Router>
          <div className="App">
            <Header />
            <Body/>
            
            
              <Routes>
                <Route exact  path='/tasks' element ={ <TasksListPage/> }>
                   <Route path=':id' element = { <TaskPage/> } />
                </Route>
              </Routes>
            
            <Footer/> 
          </div>
        </Router>
      );
        
    }
   
  } 

export default App
