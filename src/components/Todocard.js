import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button,Modal,ModalBody,ModalHeader} from 'reactstrap';

import { deleteTodo,addTodo } from '../actions/userAction'

class Todocard extends Component {
    state = { 
        modal: false,
        title:'',
        status:false,
        isError: false,
        statusCode:null,
     }

    removeTodo = (todoId) => {
        this.props.deleteTodo(todoId)
    }

    toggle = () =>{
        this.setState({modal: !this.state.modal,title:'',status:null,statusCode:null})
    }

    addTodo = () =>{
        if(this.state.title===''||this.state.status===null){
            this.setState({isError:true})
        }else{
            let todo = {
                userId:this.props.todo[0].userId,
                title:this.state.title,
                completed:(this.state.status === "true")
            }
            this.props.addTodo(todo,(rescode)=>{this.setState({statusCode:rescode},()=>{
                if(this.state.statusCode===201){
                    this.setState({title:'',url:''})
                }
            })})      
        }
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className=" container d-flex justify-content-end">
                    <button className="btn btn-primary todo-btn" onClick={()=>this.toggle()}>Add todo</button>
                </div>
               <table className="table table-bordered todo-table">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">Todo</th>
                        <th scope="col" colSpan='2'>Status</th> 
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.todo.length >= 0 && this.props.todo.map(element => 
                        <tr key={element.id}>
                            <td>{element.title}</td>
                            <td style={{color:'white',backgroundColor: element.completed ? '#28a745' : '#dc3545'}}>
                                {element.completed ? 'Completed' : 'Not Completed' }
                            </td>
                            <td style={{margin:'auto'}}>
                                <button type="button" onClick={()=>this.removeTodo(element.id)}>Delete</button>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
                
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
                    <ModalHeader toggle={this.toggle}>Add Todo</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <label htmlFor="Todo-title">Title</label>
                        <input
                         type="text" 
                         className="form-control" 
                         id="todo-title" 
                         placeholder="Enter title"
                         value={this.state.title}
                         onChange={(event)=>{this.setState({title:event.target.value})}}
                        />
                        { this.state.isError && this.state.title === '' ? 
                            <p className='text-danger'>Please enter title</p> : '' }
                    </div>
                    <div className="form-group">
                        <label htmlFor="Todo-Status">Todo Status</label>
                        <select
                         className="form-control" 
                         id="Todo-Status"
                        //  value={this.state.status}
                         onChange={(event)=>{this.setState({status:event.target.value})}}
                        >
                        <option value="">Select Todo status</option>
                        <option value={true}>Completed</option>
                        <option value={false}>Not Completed</option>
                        </select>
                        { this.state.isError && this.state.status === null ?
                            <p className='text-danger'>Please select status</p> : '' }
                    </div>
                    <div className='d-flex justify-content-between'>
                        <Button color="primary" onClick={this.addTodo}>Add</Button>
                        <div>
                            <p className="text-success positive" style={{display:this.state.statusCode===201?'block':'none'}}>
                                Success !!!
                            </p>
                        </div>
                        <Button color="danger" onClick={this.toggle}>Close</Button>
                    </div>
                    </ModalBody>
                </Modal>
            </React.Fragment>
         );
    }
}
 
export default connect(null,{deleteTodo,addTodo})(Todocard);