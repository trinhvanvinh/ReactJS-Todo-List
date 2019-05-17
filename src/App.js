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
      title: this.state.item
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

  handleClearList=()=>{
    this.setState({
      items:[],

    })
  }

  handleDelete=(id)=>{
    const filteredItems=this.state.items.filter(item=>
      item.id !== id
    );
 
    this.setState({
      items: filteredItems
    })

  }

  handleEdit =(id)=>{
    const filteredItems=this.state.items.filter(item=>
      item.id !== id
    );

    const selectedItem=this.state.items.find(item=>item.id === id);
    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item:selectedItem.title
    })

  }

  render(){
    return (

      <div className="container" >
        <div className="row" >
          
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <h3 className="text-capitalize text-center" >Todo Input</h3>

          <TodoInput
           handleSubmit={this.handleSubmit}
            item={this.state.item} 
            handleChange={this.handleChange} />

          <TodoList 
            handleDelete={this.handleDelete}
            items={this.state.items}
            clearList={this.handleClearList}
            handleEdit={this.handleEdit}
             />
          </div>
          
        </div>
      </div>
    );
  } 
}

export default App;
