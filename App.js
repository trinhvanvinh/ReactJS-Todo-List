import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';
import uuid from 'uuid';


class App extends Component  {

  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }

  handleChange=(e)=>{
    console.log(e.target.value);
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();

    const newItem={
      id:this.state.id,
      item: this.state.item
    }

    console.log(newItem);

    const updateItems=[...this.state.items, newItem];

    this.setState({
      items: updateItems,
      item:'',
      id:uuid(),
      editItem:false
    })

  }

  render(){
    return (

      <div className="container" >
        <div className="row" >
          
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <h3 className="text-capitalize text-center" >Todo Input</h3>
          <TodoInput handleSubmit={this.handleSubmit} item={this.state.item} handleChange={this.handleChange} />
          <TodoList/>
          </div>
          
        </div>
      </div>
    );
  } 
}

export default App;
