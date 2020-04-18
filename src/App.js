import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items: [],
      id: uuidv4(),
      itemInput: '',
      editItem: false,
    }
  }
  
  handleChange = (e) => {
    this.setState({
      itemInput: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.itemInput
    };
    // console.log(newItem);
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      itemInput: '',
      id: uuidv4(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => {
      return(
        item.id !== id
      )
    });
    this.setState({
      items: filteredItems
    });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => {
      return(
        item.id !== id
      )
    });
    const selectedItem = this.state.items.find((item) => {
      return(
        item.id === id
      )
    });
    // console.log(selectedItem);
    this.setState({
      items: filteredItems,
      itemInput: selectedItem.title,
      editItem: true,
      id: id
    });
  };



  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput
                itemInput={this.state.itemInput}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
