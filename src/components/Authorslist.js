import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getUsers} from '../actions/userAction'
import Header from './Header';

class Authorlist extends Component {
    state = {  }

    componentDidMount(){
        this.props.getUsers()
    }
    render() { 
        return ( 
            <React.Fragment>
                <Header/>
                <h1 className="user-card-title">Authors list:</h1>
                {this.props.users.length >= 0 && 
                    this.props.users.map(user => 
                        <div className="user-card" key={user.id}>
                            <h3 className="author-name">{user.id}. {user.name}</h3>
                            <div className="author-link">
                                <Link className="author-link1" to={`/albumlists/${user.id}`}>Albums</Link>
                                <Link className="author-link1" to={`/todolist/${user.id}`}>ToDos</Link>
                                <Link to={`/user/${user.id}`}>About</Link>
                            </div>
                        </div>
                )}
            </React.Fragment>
         );
    }
}

const mapStateToProps = state =>{
    return{
        users: state.userReducer.usersDetail
    }
}
 
export default connect(mapStateToProps,{getUsers})(Authorlist);