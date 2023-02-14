import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getUsers} from '../actions/userAction';

class User extends Component {
    state = {  }

    componentDidMount(){
        this.props.getUsers()
    }

    render() { 
        return ( 
            <React.Fragment>
                 {this.props.users.length >= 0 && 
                     this.props.users.map(user => 
                    <Link className="badge badge-pill badge-secondary" key={user.id} to={`/user/${user.id}`}>
                        {this.props.uid === user.id ? user.name : ''}
                    </Link>
                )}
            </React.Fragment>
         );
    }
}

const mapStateToProps = state => {
    return{
         users: state.userReducer.usersDetail
    }
}
 
export default connect(mapStateToProps,{getUsers})(User);