import React, { Component } from 'react';
import {connect} from 'react-redux';

import {selectUser,getTodo} from '../actions/userAction';
import {userPost} from '../actions/postAction';
import Usercard from './Usercard';
import Postcard from './Postcard';
import Todocard from './Todocard';
import Albumlist from './Albumlist';
import Header from './Header';

class Userdetails extends Component {
    state = { 
        userId:this.props.match.params.id
     }

    componentDidMount(){
        this.props.selectUser(this.state.userId)
        this.props.userPost(this.state.userId)
        this.props.getTodo(this.state.userId)
    }

    render() { 
        console.log(this.props.match.params)
        return ( 
            <React.Fragment>
                <Header/>
                {this.props.selectedUser.length >= 0 && 
                    this.props.selectedUser.map(element => 
                        <Usercard user={element} key={element.id} />
                )}
                <h2 className="user-title">Author Post List : </h2>
                {this.props.selectedPost.length >= 0 && 
                    this.props.selectedPost.map(post => 
                        <Postcard post={post} key={post.id} removebtn={false} />)
                }

                <h2 className="user-title">Author ToDo List : </h2>
                <Todocard todo={this.props.todoData} />

                <h2 className="user-title">Author albums</h2>
                <Albumlist id={this.state.userId} showHeader={true} />

            </React.Fragment>
         );
    }
}

const mapStateToProps = state => {
    return{
        selectedUser: state.userReducer.selectedUser,
        selectedPost: state.postReducer.selectedPost,
        todoData: state.userReducer.todoData,
    }
}
 
export default connect(mapStateToProps,{selectUser,userPost,getTodo})(Userdetails);