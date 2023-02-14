import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { getPosts, addPostDetail } from '../actions/postAction';
import { getUsers } from '../actions/userAction';
import Postcard from './Postcard';
import Header from './Header';

class Posts extends Component {
    
    state={
        post:this.props.posts,
        modal: false,
        title:'',
        statusCode:null,
        userid:null,
        content:'',
        isError:false,
    }

    componentDidMount(){
        this.props.getPosts();
        this.props.getUsers();
    }

    toggle = () =>{
        this.setState({modal: !this.state.modal,title:'',userid:'',content:'',statusCode:null})
    }

    newPost = () => {
        if(this.state.title===''||this.state.userid===null){
            this.setState({isError:true})
        }else{
            let post ={
                title: this.state.title,
                userId: this.state.userid,
                body: this.state.content
            }
            this.props.addPostDetail(post,(rescode)=>{this.setState({statusCode:rescode},()=>{
                if(this.state.statusCode === 201){
                    this.setState({title:'',userid:null,content:''})
                }
            })})
        }
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <Header />
                <div className="container d-flex justify-content-between">
                    <h3 className="post-title">Posts</h3>
                    <button 
                     className="btn btn-primary add-btn" 
                     onClick={()=>this.toggle()}>
                         Add Post
                    </button>
                </div>
                    { this.props.posts.length >= 0 && this.props.posts.map(post => 
                        <Postcard post={post} key={post.id} removebtn={true} />
                    )}

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
                    <ModalHeader toggle={this.toggle}>Add Post</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <label htmlFor="post-title">Title</label>
                        <input
                         type="text" 
                         className="form-control" 
                         id="post-title" 
                         placeholder="Enter title" 
                         required
                         value={this.state.title}
                         onChange={(event)=>{this.setState({title:event.target.value})}}
                        />
                        { this.state.isError && this.state.title === '' ? 
                            <p className='text-danger'>Please enter title</p> : '' }
                    </div>
                    <div className="form-group">
                        <label htmlFor="author-select">Select user</label>
                        <select
                         className="form-control" 
                         id="author-select" 
                         value={this.state.user} 
                         onChange={(event)=>{this.setState({userid:parseInt(event.target.value)})}}>
                        <option value="Select the author">Select the author</option>
                        {this.props.users.length >= 0 &&
                            this.props.users.map(user => 
                        <option value={user.id} key={user.id}>{user.name}</option>
                        )}
                        </select>
                        { this.state.isError && this.state.user === null ?
                            <p className='text-danger'>Please select user</p> : '' }
                    </div>
                    <div className="form-group">
                        <label htmlFor="post-content">Title</label>
                        <textarea
                         className="form-control" 
                         id="post-title" 
                         placeholder="Contents" 
                         required 
                         value={this.state.content}
                         onChange={(event)=>{this.setState({content:event.target.value})}}
                        />
                        { this.state.isError && this.state.content === '' ? 
                            <p className='text-danger'>Please type something</p> : '' }
                    </div>
                    <div className='d-flex justify-content-between'>
                        <Button color="primary" type="submit" onClick={this.newPost}>Post</Button>
                        <div>
                        <p className="text-success positive" style={{display:this.state.statusCode===201?'block':'none'}}>
                            Success !!!
                        </p>
                        </div>
                        <Button color="danger" type="button" onClick={this.toggle}>close</Button>
                    </div>
                    </ModalBody>
                </Modal>
            </React.Fragment>
         );
    }
}

const mapStateToProps = state => {
    // console.log(state.postReducer.posts)
    return{
        posts: state.postReducer.posts,
        users: state.userReducer.usersDetail
    }
}

export default connect(mapStateToProps,{ getPosts, getUsers, addPostDetail })(Posts);