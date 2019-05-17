import React, { Component } from 'react'

export default class todoInput extends Component {
  render() {

    const {item, handleChange, handleSubmit}=this.props;

    return (
      <div className="card card-body my-3" >
        <form onSubmit={handleSubmit} > 
            <div className="input-group"> 
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white" >
                        <i className="fas fa-book" >  </i>
                    </div>
                </div> 
                <input onChange={handleChange} value={item} placeholder="add a todo item" type="text" className="form-control text-capitalize" />
            </div>   
            <button className="btn btn-block btn-primary mt-3" type="submit" >Add item</button>
        </form>
      </div>
    )
  }
}
