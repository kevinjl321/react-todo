import React, {Component} from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component{
  state =  {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Homework',
        completed: false
      },
      {
        id: 3,
        title: 'Gaming',
        completed: false
      }
    ]
  }
  render(){
    return(
      <div className = "App">
        <Todos />
      </div>
    )
  }
}
export default App;
