import React, { Component } from 'react';
import './App.css';
// import TodoList from './Components/TodoList';
import Index from './pages/Index';
import { Provider } from 'react-redux';
import store from './store';

// import Test from './pages/Playground/test';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Index />
        </div>
      </Provider>
    );
  }
}

export default App;
