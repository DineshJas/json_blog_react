import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getTodo,getUsers} from '../actions/userAction';
import Todocard from './Todocard';
import Header from './Header';

class Todolist extends Component {
    state = { 
        userId: this.props.match.params.id
     }

    componentDidMount(){
        this.props.getTodo(this.state.userId)
        this.props.getUsers()
    }
    render() { 
        return ( 
            <React.Fragment>
                <Header/>
                <div className="user-title">
                    {this.props.users.length >= 0 &&
                        this.props.users.map(user => 
                        <h3 key={user.id} >
                            {`${user.id}` === this.state.userId ? `${user.name}'s Todo List` : ''}
                        </h3>
                    )}
                </div>
                <Todocard todo={this.props.todoData} />
            </React.Fragment>
         );
    }
}

const mapStateToProps = state => {
    return{
        todoData: state.userReducer.todoData,
        users: state.userReducer.usersDetail
    }
}
 
export default connect(mapStateToProps,{getTodo,getUsers})(Todolist);