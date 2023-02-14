import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button,Modal, ModalHeader, ModalBody } from 'reactstrap';


import { getPosts } from '../actions/postAction';
import { getComments, addComments } from '../actions/commentAction';
import Commentcard from './Commentcard';
import User from './User'; 
import Header from './Header';

class Postdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.match.params.postid,
            modal: false,
            title:'',
            content:'',
            email:'',
            isError: false,
            statusCode:null
        }
    }

    componentDidMount(){
        this.props.getPosts()
        this.props.getComments(this.state.postId)
    }

    toggle = () =>{
        this.setState({modal: !this.state.modal,title:'',content:'',email:'',statusCode:null})
    }

    addComment = () => {
        if(this.state.title === '' || this.state.content === '' || this.state.email === ''){
            this.setState({isError:true})
            return;
        }
      
            let comment = {
                postId:parseInt(this.state.postId),
                name:this.state.title,
                email:this.state.email,
                body:this.state.content
            }
            this.props.addComments(comment,(rescode)=>{
                if(rescode === 201){
                    this.setState({title:'',content:'',email:'',statusCode:rescode})
                }
            })
        
    }

    render() {
        return ( 
            <React.Fragment>
                <Header/>
                <h3 className="user-title-post">Post</h3>
                {this.props.posts.length >= 0 && 
                    this.props.posts.map(post => 
                        `${post.id}` === this.state.postId ? 
                        <div className="card post-card" key={post.id}>
                            <div className="card-body">
                                <h3 className="card-title">{post.title}</h3>
                                <p className="card-text">{post.body}</p>
                                <p>Posted by- <User uid={post.userId} /></p>
                            </div>
                        </div>
                        : '' 
                    )
                }
                
                <h3 className="user-title">Post comments</h3>
                <div className="container d-flex justify-content-end">
                <button className="btn btn-primary comment-btn" onClick={()=>this.toggle()}>
                    Add Comment
                </button>
                </div>
                {this.props.commentList.length >= 0 &&
                    this.props.commentList.map(element => 
                <Commentcard comments={element} key={element.id} />
                )}

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
                    <ModalHeader toggle={this.toggle}>Add Todo</ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <label htmlFor="comment-title">Title</label>
                        <input
                         type="text" 
                         className="form-control" 
                         id="comment-title" 
                         placeholder="Enter title"
                         value={this.state.title}
                         onChange={(event)=>{this.setState({title:event.target.value})}}
                        />
                        { this.state.isError && this.state.title === '' ? 
                            <p className='text-danger'>Please enter title</p> : '' }
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment-email">Email</label>
                        <input
                         type="text" 
                         className="form-control" 
                         id="comment-email" 
                         placeholder="Enter Email"
                         value={this.state.email}
                         onChange={(event)=>{this.setState({email:event.target.value})}}
                        />
                        { this.state.isError && this.state.email === '' ? 
                            <p className='text-danger'>Please enter email address</p> : '' }
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment-content">Content</label>
                        <textarea
                         className="form-control" 
                         id="comment-content" 
                         placeholder="Content"
                         value={this.state.content}
                         onChange={(event)=>{this.setState({content:event.target.value})}}
                        />
                        { this.state.isError && this.state.content === '' ? 
                            <p className='text-danger'>Please enter some content</p> : '' }
                    </div>
                    <div className="d-flex justify-content-between">
                        <Button color="primary" onClick={this.addComment}>Add</Button>
                        <div>
                            <p className="text-success positive" style={{display:this.state.statusCode === 201?'block':'none'}}>
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

const mapStateToProps = state => {
    return{
        posts: state.postReducer.posts,
        commentList: state.commentReducer.commentList
    }
}
 
export default connect(mapStateToProps,{getComments,getPosts,addComments})(Postdetails);